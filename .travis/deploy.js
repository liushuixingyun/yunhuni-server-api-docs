#!/usr/bin/env node

(function() {
    "use strict";

    var process = require('process');
    if (process.env.TRAVIS_BRANCH != "develop") {
        console.log(`TRAVIS_BRANCH="${process.env.TRAVIS_BRANCH}", exit(0).`);
        process.exit(0);
    }

    var bookdir = '_book';

    var fs = require('fs');
    var path = require('path');

    var OSS = require('ali-oss').Wrapper;
    var client = new OSS({
      region: 'oss-cn-beijing',
      accessKeyId: 'LTAI32yTEuP5Exou',
      accessKeySecret: 'nIrTHpINXPe72I8ekSXjxLY1p7GsDr',
    });
    client.useBucket('yunhuni-development-open');

    var walk = function(dir, done) {
        var results = [];
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var pending = list.length;
            if (!pending) return done(null, results);
            list.forEach(function(file) {
                file = path.resolve(dir, file);
                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                        walk(file, function(err, res) {
                            results = results.concat(res);
                            if (!--pending) done(null, results);
                        });
                    } else {
                        results.push(file);
                        if (!--pending) done(null, results);
                    }
                });
            });
        });
    };

    walk(bookdir, function(err, fileList) {
        if (err) throw err;

        let doUpload = (i) => {
            if (i >= fileList.length)
                return;
            let filename = fileList[i];
            let ossobj = path.relative(bookdir, filename);
            ossobj = path.join('docs/server-api', ossobj);
            ossobj = path.normalize(ossobj);
            ossobj = ossobj.replace(/\\/g, '/');
            console.log(`upload [start] ${filename} -> ${ossobj}`);
            client.put(ossobj, filename)
                .then(val => {
                    console.log(`upload [ok   ] ${filename} -> ${ossobj}`);
                    doUpload(++i);
                })
                .catch(reason => {
                    console.error(`upload [fail ] ${filename} -> ${ossobj}\n${reason}`);
                    throw reason;
                });
        };

        doUpload(0);
    });

}());
