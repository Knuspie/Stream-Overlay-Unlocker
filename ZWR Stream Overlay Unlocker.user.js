// ==UserScript==
// @name         ZWR Stream Overlay Unlocker
// @namespace    https://github.com/Knuspie/Stream-Overlay-Unlocker
// @version      1.2
// @description  unlock hidden stream overlay options
// @author       Knuspie
// @match        https://zwr.gg/overlay/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zwr.gg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // add overlay types
    const overlay = document.getElementById("overlayTypeSelect");
    const ranks = ["Staff", "Admin", "Owner"]
    for (let i = 0; i < ranks.length; i++) {
        overlay.insertAdjacentHTML("beforeend", `<option value=${ranks[i]}>${ranks[i]}</option>`);
    }
    // add color options
    document.head.insertAdjacentHTML("beforeend", `<style>#bar-picker {display: block!important} #colour-picker {display: block!important} #text-picker {display: block!important}</style>`);
    document.querySelectorAll(`input[disabled]`).forEach(el => {
        el.removeAttribute("disabled")
    })
    // add url option
    document.querySelector(".panel-row").insertAdjacentHTML("beforeend", `<div class="half"><div class="label">Url:</div><input type="text" value="zwr.gg" id="overlayUrl"></div>`)
    document.getElementById("overlayUrl").addEventListener('input', function() {
        ZRDrawOverlay()
    });
    // edit draw function
    function ZRDrawOverlay() {
        canvasCTX.clearRect(0, 0, canvas.width, canvas.height);
        var overlayUrl = document.getElementById("overlayUrl");
        var a = '';
        var b = overlayPosition.value;
        var c = overlayType.value;
        var d = '';
        var f = '';
        if (c == 'Player') {
            var colorR = overlayBackgroundR.value;
            var colorG = overlayBackgroundG.value;
            var colorB = overlayBackgroundB.value;
            var d = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
            var BarR = overlayBarR.value;
            var BarG = overlayBarG.value;
            var BarB = overlayBarB.value;
            a = 'rgb(' + BarR + ',' + BarG + ',' + BarB + ')';
            var TextR = overlayTextR.value;
            var TextG = overlayTextG.value;
            var TextB = overlayTextB.value;
            f = 'rgb(' + TextR + ',' + TextG + ',' + TextB + ')';
        }
        if (c == 'Staff') {
            var colorR = overlayBackgroundR.value;
            var colorG = overlayBackgroundG.value;
            var colorB = overlayBackgroundB.value;
            var d = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
            var BarR = overlayBarR.value;
            var BarG = overlayBarG.value;
            var BarB = overlayBarB.value;
            a = 'rgb(' + BarR + ',' + BarG + ',' + BarB + ')';
            var TextR = overlayTextR.value;
            var TextG = overlayTextG.value;
            var TextB = overlayTextB.value;
            f = 'rgb(' + TextR + ',' + TextG + ',' + TextB + ')';
        }
        if (c == 'Admin') {
            var colorR = overlayBackgroundR.value;
            var colorG = overlayBackgroundG.value;
            var colorB = overlayBackgroundB.value;
            var d = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
            var BarR = overlayBarR.value;
            var BarG = overlayBarG.value;
            var BarB = overlayBarB.value;
            a = 'rgb(' + BarR + ',' + BarG + ',' + BarB + ')';
            var TextR = overlayTextR.value;
            var TextG = overlayTextG.value;
            var TextB = overlayTextB.value;
            f = 'rgb(' + TextR + ',' + TextG + ',' + TextB + ')';
        }
        if (c == 'Owner') {
            var colorR = overlayBackgroundR.value;
            var colorG = overlayBackgroundG.value;
            var colorB = overlayBackgroundB.value;
            var d = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
            var BarR = overlayBarR.value;
            var BarG = overlayBarG.value;
            var BarB = overlayBarB.value;
            a = 'rgb(' + BarR + ',' + BarG + ',' + BarB + ')';
            var TextR = overlayTextR.value;
            var TextG = overlayTextG.value;
            var TextB = overlayTextB.value;
            f = 'rgb(' + TextR + ',' + TextG + ',' + TextB + ')';
        }
        if (b == 'Top Left') {
            canvasCTX.beginPath();
            canvasCTX.moveTo(0, 0);
            canvasCTX.lineTo(546, 0);
            canvasCTX.lineTo(546, 76);
            canvasCTX.lineTo(512, 110);
            canvasCTX.lineTo(394, 110);
            canvasCTX.lineTo(394, 130);
            canvasCTX.lineTo(382, 142);
            canvasCTX.lineTo(13, 142);
            canvasCTX.lineTo(0, 130);
            canvasCTX.lineTo(0, 0);
            canvasCTX.closePath();
            canvasCTX.fillStyle = d;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(9, 5);
            canvasCTX.lineTo(138, 5);
            canvasCTX.lineTo(138, 10);
            canvasCTX.lineTo(9, 10);
            canvasCTX.lineTo(9, 5);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(157, 5);
            canvasCTX.lineTo(538, 5);
            canvasCTX.lineTo(538, 10);
            canvasCTX.lineTo(157, 10);
            canvasCTX.lineTo(157, 5);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "center";
            canvasCTX.fillText(overlayUrl.value, 267, 134);
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "left";
            canvasCTX.fillText(c, 14, 134);
            canvasCTX.drawImage(imgLogo, 12, 0, 120, 120);
            var d = overlayName.value;
            var e = d.length;
            canvasCTX.fillStyle = f;
            canvasCTX.textAlign = "center";
            if (e <= 10) {
                canvasCTX.font = "85px KillTheNoise";
                canvasCTX.fillText(d, 347, 85, 360)
            } else if (e <= 15) {
                canvasCTX.font = "70px KillTheNoise";
                canvasCTX.fillText(d, 347, 80, 360)
            } else if (e <= 20) {
                canvasCTX.font = "60px KillTheNoise";
                canvasCTX.fillText(d, 347, 75, 360)
            } else {
                canvasCTX.font = "50px KillTheNoise";
                canvasCTX.fillText(d, 347, 70, 360)
            }
            canvasCTX.drawImage(imgFlag, 110, 118, 25, 18)
        } else if (b == 'Top Right') {
            canvasCTX.beginPath();
            canvasCTX.moveTo(0, 0);
            canvasCTX.lineTo(546, 0);
            canvasCTX.lineTo(546, 130);
            canvasCTX.lineTo(534, 142);
            canvasCTX.lineTo(165, 142);
            canvasCTX.lineTo(153, 130);
            canvasCTX.lineTo(153, 110);
            canvasCTX.lineTo(35, 110);
            canvasCTX.lineTo(0, 76);
            canvasCTX.lineTo(0, 0);
            canvasCTX.closePath();
            canvasCTX.fillStyle = d;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(9, 5);
            canvasCTX.lineTo(390, 5);
            canvasCTX.lineTo(390, 10);
            canvasCTX.lineTo(9, 10);
            canvasCTX.lineTo(9, 5);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(409, 5);
            canvasCTX.lineTo(538, 5);
            canvasCTX.lineTo(538, 10);
            canvasCTX.lineTo(409, 10);
            canvasCTX.lineTo(409, 5);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "center";
            canvasCTX.fillText(overlayUrl.value, 280, 134);
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "left";
            canvasCTX.fillText(c, 407, 134);
            canvasCTX.drawImage(imgLogo, 414, 0, 120, 120);
            var d = overlayName.value;
            var e = d.length;
            canvasCTX.fillStyle = f;
            canvasCTX.textAlign = "center";
            if (e <= 10) {
                canvasCTX.font = "85px KillTheNoise";
                canvasCTX.fillText(d, 200, 85, 360)
            } else if (e <= 15) {
                canvasCTX.font = "70px KillTheNoise";
                canvasCTX.fillText(d, 200, 80, 360)
            } else if (e <= 20) {
                canvasCTX.font = "60px KillTheNoise";
                canvasCTX.fillText(d, 200, 75, 360)
            } else {
                canvasCTX.font = "50px KillTheNoise";
                canvasCTX.fillText(d, 200, 70, 360)
            }
            canvasCTX.drawImage(imgFlag, 503, 118, 25, 18)
        } else if (b == 'Bottom Left') {
            canvasCTX.beginPath();
            canvasCTX.moveTo(0, 13);
            canvasCTX.lineTo(13, 0);
            canvasCTX.lineTo(382, 0);
            canvasCTX.lineTo(394, 13);
            canvasCTX.lineTo(394, 33);
            canvasCTX.lineTo(512, 33);
            canvasCTX.lineTo(546, 67);
            canvasCTX.lineTo(546, 142);
            canvasCTX.lineTo(0, 142);
            canvasCTX.lineTo(0, 13);
            canvasCTX.closePath();
            canvasCTX.fillStyle = d;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(9, 37);
            canvasCTX.lineTo(138, 37);
            canvasCTX.lineTo(138, 42);
            canvasCTX.lineTo(9, 42);
            canvasCTX.lineTo(9, 37);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(157, 37);
            canvasCTX.lineTo(508, 37);
            canvasCTX.lineTo(513, 42);
            canvasCTX.lineTo(157, 42);
            canvasCTX.lineTo(157, 37);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "center";
            canvasCTX.fillText(overlayUrl.value, 267, 24);
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "left";
            canvasCTX.fillText(c, 14, 24);
            canvasCTX.drawImage(imgLogo, 12, 32, 120, 120);
            var d = overlayName.value;
            var e = d.length;

            canvasCTX.fillStyle = f;
            canvasCTX.textAlign = "center";
            if (e <= 10) {
                canvasCTX.font = "85px KillTheNoise";
                canvasCTX.fillText(d, 347, 117, 360)
            } else if (e <= 15) {
                canvasCTX.font = "70px KillTheNoise";
                canvasCTX.fillText(d, 347, 112, 360)
            } else if (e <= 20) {
                canvasCTX.font = "60px KillTheNoise";
                canvasCTX.fillText(d, 347, 107, 360)
            } else {
                canvasCTX.font = "50px KillTheNoise";
                canvasCTX.fillText(d, 347, 102, 360)
            }
            canvasCTX.drawImage(imgFlag, 111, 8, 25, 18)
        } else {
            canvasCTX.beginPath();
            canvasCTX.moveTo(0, 67);
            canvasCTX.lineTo(35, 33);
            canvasCTX.lineTo(153, 33);
            canvasCTX.lineTo(153, 13);
            canvasCTX.lineTo(165, 0);
            canvasCTX.lineTo(534, 0);
            canvasCTX.lineTo(546, 13);
            canvasCTX.lineTo(546, 142);
            canvasCTX.lineTo(0, 142);
            canvasCTX.lineTo(0, 67);
            canvasCTX.closePath();
            canvasCTX.fillStyle = d;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(409, 37);
            canvasCTX.lineTo(538, 37);
            canvasCTX.lineTo(538, 42);
            canvasCTX.lineTo(409, 42);
            canvasCTX.lineTo(409, 37);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.beginPath();
            canvasCTX.moveTo(39, 37);
            canvasCTX.lineTo(390, 37);
            canvasCTX.lineTo(390, 42);
            canvasCTX.lineTo(34, 42);
            canvasCTX.lineTo(39, 37);
            canvasCTX.closePath();
            canvasCTX.fillStyle = a;
            canvasCTX.fill();
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "center";
            canvasCTX.fillText(overlayUrl.value, 280, 24);
            canvasCTX.font = "20px Ikaros";
            canvasCTX.fillStyle = "#dddbdf";
            canvasCTX.textAlign = "left";
            canvasCTX.fillText(c, 408, 24);
            canvasCTX.drawImage(imgLogo, 414, 32, 120, 120);
            var d = overlayName.value;
            var e = d.length;

            canvasCTX.fillStyle = f;
            canvasCTX.textAlign = "center";
            if (e <= 10) {
                canvasCTX.font = "85px KillTheNoise";
                canvasCTX.fillText(d, 204, 117, 360)
            } else if (e <= 15) {
                canvasCTX.font = "70px KillTheNoise";
                canvasCTX.fillText(d, 204, 112, 360)
            } else if (e <= 20) {
                canvasCTX.font = "60px KillTheNoise";
                canvasCTX.fillText(d, 204, 107, 360)
            } else {
                canvasCTX.font = "50px KillTheNoise";
                canvasCTX.fillText(d, 204, 102, 360)
            }
            canvasCTX.drawImage(imgFlag, 500, 8, 25, 18)
        }
        ZRDownloadOverlay()
    };
    // add color presets
    function colorSelector() {
        if (overlay.value == 'Player') {
            overlayBackgroundR.value = 18;
            overlayBackgroundG.value = 18;
            overlayBackgroundB.value = 18;
            overlayBarR.value = 171;
            overlayBarG.value = 60;
            overlayBarB.value = 66;
            overlayTextR.value = 255;
            overlayTextG.value = 255;
            overlayTextB.value = 255;
        }
        else if (overlay.value == 'Staff') {
            overlayBackgroundR.value = 18;
            overlayBackgroundG.value = 18;
            overlayBackgroundB.value = 18;
            overlayBarR.value = 91;
            overlayBarG.value = 49;
            overlayBarB.value = 197;
            overlayTextR.value = 197;
            overlayTextG.value = 149;
            overlayTextB.value = 49;
        }
        else if (overlay.value == 'Admin' || overlay.value == 'Owner') {
            overlayBackgroundR.value = 0;
            overlayBackgroundG.value = 0;
            overlayBackgroundB.value = 0;
            overlayBarR.value = 0;
            overlayBarG.value = 0;
            overlayBarB.value = 0;
            overlayTextR.value = 0;
            overlayTextG.value = 0;
            overlayTextB.value = 0;
        }
    }
    overlay.addEventListener('change', colorSelector);
    // inject edited function
    addJS_Node(ZRDrawOverlay);
    function addJS_Node(text, s_URL, funcToRun, runOnLoad) {
        var D = document;
        var scriptNode = D.createElement('script');
        if (runOnLoad) {
            scriptNode.addEventListener("load", runOnLoad, false);
        }
        scriptNode.type = "text/javascript";
        if (text) scriptNode.textContent = text;
        if (s_URL) scriptNode.src = s_URL;
        if (funcToRun) scriptNode.textContent = '(' + funcToRun.toString() + ')()';

        var targ = D.getElementsByTagName('head')[0] || D.body || D.documentElement;
        targ.appendChild(scriptNode);
    }
})();