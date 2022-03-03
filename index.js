

function option() {
            let userOption = document.getElementById('ttt');
            let optn = userOption.options[userOption.selectedIndex].text;
            if (optn == 'multiplication') {
                multi();
            } else if (optn == 'addition') {
                addy();
            } else if (optn == 'subtraction') {
                subt();
            } else {
                div();
            }
        }
        function multi() {
            display1.innerHTML = '';
            display2.innerHTML = '';
            display3.innerHTML = '';
            display4.innerHTML = '';
            display5.innerHTML = '';
            display6.innerHTML = '';
            display7.innerHTML = '';
            display8.innerHTML = '';
            display9.innerHTML = '';
            display10.innerHTML = '';
            display11.innerHTML = '';
            display12.innerHTML = '';
            display13.innerHTML = '';
            display14.innerHTML = '';
            display15.innerHTML = '';
            display16.innerHTML = '';
            display17.innerHTML = '';
            display18.innerHTML = '';
            display19.innerHTML = '';
            display20.innerHTML = '';

            let a = inp1.value;
            let b = inp2.value;
            for (let i = 1; i <= a; i++){
                for (let j = 1; j <= b; j++) {
                    ab = i;
                    if (ab == 1) {
                        for (let l = i; l <= i; l++){
                            display1.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 2) {
                        for (let l = i; l <= i; l++){
                            display2.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 3) {
                        for (let l = i; l <= i; l++){
                            display3.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 4) {
                        for (let l = i; l <= i; l++){
                            display4.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 5) {
                        for (let l = i; l <= i; l++){
                            display5.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 6) {
                        for (let l = i; l <= i; l++){
                            display6.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 7) {
                        for (let l = i; l <= i; l++){
                            display7.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 8) {
                        for (let l = i; l <= i; l++){
                            display8.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 9) {
                        for (let l = i; l <= i; l++){
                            display9.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 10) {
                        for (let l = i; l <= i; l++){
                            display10.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 11) {
                        for (let l = i; l <= i; l++){
                            display11.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 12) {
                        for (let l = i; l <= i; l++){
                            display12.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 13) {
                        for (let l = i; l <= i; l++){
                            display13.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 14) {
                        for (let l = i; l <= i; l++){
                            display14.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 15) {
                        for (let l = i; l <= i; l++){
                            display15.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 16) {
                        for (let l = i; l <= i; l++){
                            display16.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 17) {
                        for (let l = i; l <= i; l++){
                            display17.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 18) {
                        for (let l = i; l <= i; l++){
                            display18.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 19) {
                        for (let l = i; l <= i; l++){
                            display19.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                    if (ab == 20) {
                        for (let l = i; l <= i; l++){
                            display20.innerHTML += i + ' * ' + j + ' = ' + (i*j) + '<br>';
                        }
                    }
                }
            }
        }
        function addy() {
            display1.innerHTML = '';
            display2.innerHTML = '';
            display3.innerHTML = '';
            display4.innerHTML = '';
            display5.innerHTML = '';
            display6.innerHTML = '';
            display7.innerHTML = '';
            display8.innerHTML = '';
            display9.innerHTML = '';
            display10.innerHTML = '';
            display11.innerHTML = '';
            display12.innerHTML = '';
            display13.innerHTML = '';
            display14.innerHTML = '';
            display15.innerHTML = '';
            display16.innerHTML = '';
            display17.innerHTML = '';
            display18.innerHTML = '';
            display19.innerHTML = '';
            display20.innerHTML = '';

            let c = inp1.value;
            let d = inp2.value;
            for (let i = 1; i <= c; i++) {
                for (let j = 1; j <= d; j++) {
                    ab = i;
                    if (ab == 1) {
                        for (let l = i; l <= i; l++){
                            display1.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 2) {
                        for (let l = i; l <= i; l++){
                            display2.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 3) {
                        for (let l = i; l <= i; l++){
                            display3.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 4) {
                        for (let l = i; l <= i; l++){
                            display4.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 5) {
                        for (let l = i; l <= i; l++){
                            display5.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 6) {
                        for (let l = i; l <= i; l++){
                            display6.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 7) {
                        for (let l = i; l <= i; l++){
                            display7.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 8) {
                        for (let l = i; l <= i; l++){
                            display8.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 9) {
                        for (let l = i; l <= i; l++){
                            display9.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 10) {
                        for (let l = i; l <= i; l++){
                            display10.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 11) {
                        for (let l = i; l <= i; l++){
                            display11.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 12) {
                        for (let l = i; l <= i; l++){
                            display12.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 13) {
                        for (let l = i; l <= i; l++){
                            display13.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 14) {
                        for (let l = i; l <= i; l++){
                            display14.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 15) {
                        for (let l = i; l <= i; l++){
                            display15.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 16) {
                        for (let l = i; l <= i; l++){
                            display16.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 17) {
                        for (let l = i; l <= i; l++){
                            display17.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 18) {
                        for (let l = i; l <= i; l++){
                            display18.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 19) {
                        for (let l = i; l <= i; l++){
                            display19.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                    if (ab == 20) {
                        for (let l = i; l <= i; l++){
                            display20.innerHTML += i + ' + ' + j + ' = ' + (i+j) + '<br>';
                        }
                    }
                }
            }
        }
        function subt() {
            display1.innerHTML = '';
            display2.innerHTML = '';
            display3.innerHTML = '';
            display4.innerHTML = '';
            display5.innerHTML = '';
            display6.innerHTML = '';
            display7.innerHTML = '';
            display8.innerHTML = '';
            display9.innerHTML = '';
            display10.innerHTML = '';
            display11.innerHTML = '';
            display12.innerHTML = '';
            display13.innerHTML = '';
            display14.innerHTML = '';
            display15.innerHTML = '';
            display16.innerHTML = '';
            display17.innerHTML = '';
            display18.innerHTML = '';
            display19.innerHTML = '';
            display20.innerHTML = '';

            let c = inp1.value;
            let d = inp2.value;
            for (let i = 1; i <= c; i++) {
                for (let j = 1; j <= d; j++) {
                    ab = i;
                    if (ab == 1) {
                        for (let l = i; l <= i; l++){
                            display1.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 2) {
                        for (let l = i; l <= i; l++){
                            display2.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 3) {
                        for (let l = i; l <= i; l++){
                            display3.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 4) {
                        for (let l = i; l <= i; l++){
                            display4.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 5) {
                        for (let l = i; l <= i; l++){
                            display5.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 6) {
                        for (let l = i; l <= i; l++){
                            display6.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 7) {
                        for (let l = i; l <= i; l++){
                            display7.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 8) {
                        for (let l = i; l <= i; l++){
                            display8.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 9) {
                        for (let l = i; l <= i; l++){
                            display9.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 10) {
                        for (let l = i; l <= i; l++){
                            display10.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 11) {
                        for (let l = i; l <= i; l++){
                            display11.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 12) {
                        for (let l = i; l <= i; l++){
                            display12.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 13) {
                        for (let l = i; l <= i; l++){
                            display13.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 14) {
                        for (let l = i; l <= i; l++){
                            display14.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 15) {
                        for (let l = i; l <= i; l++){
                            display15.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 16) {
                        for (let l = i; l <= i; l++){
                            display16.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 17) {
                        for (let l = i; l <= i; l++){
                            display17.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 18) {
                        for (let l = i; l <= i; l++){
                            display18.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 19) {
                        for (let l = i; l <= i; l++){
                            display19.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                    if (ab == 20) {
                        for (let l = i; l <= i; l++){
                            display20.innerHTML += i + ' - ' + j + ' = ' + (i-j) + '<br>';
                        }
                    }
                }
            }
        }
        function div() {
            display1.innerHTML = '';
            display2.innerHTML = '';
            display3.innerHTML = '';
            display4.innerHTML = '';
            display5.innerHTML = '';
            display6.innerHTML = '';
            display7.innerHTML = '';
            display8.innerHTML = '';
            display9.innerHTML = '';
            display10.innerHTML = '';
            display11.innerHTML = '';
            display12.innerHTML = '';
            display13.innerHTML = '';
            display14.innerHTML = '';
            display15.innerHTML = '';
            display16.innerHTML = '';
            display17.innerHTML = '';
            display18.innerHTML = '';
            display19.innerHTML = '';
            display20.innerHTML = '';

            let c = inp1.value;
            let d = inp2.value;
            for (let i = 1; i <= c; i++) {
                for (let j = 1; j <= d; j++) {
                    ab = i;
                    if (ab == 1) {
                        for (let l = i; l <= i; l++){
                            display1.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 2) {
                        for (let l = i; l <= i; l++){
                            display2.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 3) {
                        for (let l = i; l <= i; l++){
                            display3.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 4) {
                        for (let l = i; l <= i; l++){
                            display4.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 5) {
                        for (let l = i; l <= i; l++){
                            display5.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 6) {
                        for (let l = i; l <= i; l++){
                            display6.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 7) {
                        for (let l = i; l <= i; l++){
                            display7.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 8) {
                        for (let l = i; l <= i; l++){
                            display8.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 9) {
                        for (let l = i; l <= i; l++){
                            display9.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 10) {
                        for (let l = i; l <= i; l++){
                            display10.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 11) {
                        for (let l = i; l <= i; l++){
                            display11.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 12) {
                        for (let l = i; l <= i; l++){
                            display12.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 13) {
                        for (let l = i; l <= i; l++){
                            display13.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 14) {
                        for (let l = i; l <= i; l++){
                            display14.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 15) {
                        for (let l = i; l <= i; l++){
                            display15.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 16) {
                        for (let l = i; l <= i; l++){
                            display16.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 17) {
                        for (let l = i; l <= i; l++){
                            display17.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 18) {
                        for (let l = i; l <= i; l++){
                            display18.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 19) {
                        for (let l = i; l <= i; l++){
                            display19.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                    if (ab == 20) {
                        for (let l = i; l <= i; l++){
                            display20.innerHTML += i + ' / ' + j + ' = ' + parseFloat(i/j).toFixed(2) + '<br>';
                        }
                    }
                }
            }
        }