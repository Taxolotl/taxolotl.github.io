var select = document.getElementById("from");
var fro;
function logValue() {
    switch (this.value) {
        case "celsius":
            fro = "celsius";
            document.getElementById("to").options[1].disabled = true;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "kelvin":
            fro = "kelvin";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = true;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "fahrenheit":
            fro = "fahrenheit";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = true;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "rankine":
            fro = "rankine";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = true;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "delisle":
            fro = "delisle";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = true;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "newton":
            fro = "newton";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = true;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "reaumur":
            fro = "reaumur";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = true;
            document.getElementById("to").options[8].disabled = false;
            run();
            break;
        case "romer":
            fro = "romer";
            document.getElementById("to").options[1].disabled = false;
            document.getElementById("to").options[2].disabled = false;
            document.getElementById("to").options[3].disabled = false;
            document.getElementById("to").options[4].disabled = false;
            document.getElementById("to").options[5].disabled = false;
            document.getElementById("to").options[6].disabled = false;
            document.getElementById("to").options[7].disabled = false;
            document.getElementById("to").options[8].disabled = true;
            run();
            break;
    }
}
select.addEventListener("change", logValue, false);
var select2 = document.getElementById("to");
var to;
function logValue2() {
    switch (this.value) {
        case "celsius":
            to = "celsius";
            document.getElementById("from").options[1].disabled = true;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "kelvin":
            to = "kelvin";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = true;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "fahrenheit":
            to = "fahrenheit";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = true;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "rankine":
            to = "rankine";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = true;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "delisle":
            to = "delisle";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = true;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "newton":
            to = "newton";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = true;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "reaumur":
            to = "reaumur";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = true;
            document.getElementById("from").options[8].disabled = false;
            run();
            break;
        case "romer":
            to = "romer";
            document.getElementById("from").options[1].disabled = false;
            document.getElementById("from").options[2].disabled = false;
            document.getElementById("from").options[3].disabled = false;
            document.getElementById("from").options[4].disabled = false;
            document.getElementById("from").options[5].disabled = false;
            document.getElementById("from").options[6].disabled = false;
            document.getElementById("from").options[7].disabled = false;
            document.getElementById("from").options[8].disabled = true;
            run();
            break;
    }
}
select2.addEventListener("change", logValue2, false);
var input = document.getElementById("inp");
input.addEventListener("input", run);
function run() {
    if (fro == "celsius") {
        if (to == "kelvin") {
            document.getElementById("out").value = celsiusToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = °C + 273.15", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = celsiusToFahrenheit(parseInt(document.getElementById("inp").value));
            katex.render("°F = °C \\cdot \\frac{9}{5} + 32", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "rankine") {
            document.getElementById("out").value = celsiusToRankine(parseInt(document.getElementById("inp").value));
            katex.render("°Ra = °C \\cdot \\frac{9}{5} + 273.15", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "delisle") {
            document.getElementById("out").value = celsiusToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (100-°C) \\cdot \\frac{3}{2}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "newton") {
            document.getElementById("out").value = celsiusToNewton(parseInt(document.getElementById("inp").value));
            katex.render("°N = °C \\cdot 0.33", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = celsiusToReaumur(parseInt(document.getElementById("inp").value));
            katex.render("°R = °C \\cdot 0.8", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = celsiusToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = °C \\cdot \\frac{21}{40} + 7.5", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
    if (fro == "kelvin") {
        if (to == "celsius") {
            document.getElementById("out").value = kelvinToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = °K - 273.15", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = kelvinToFahrenheit(parseInt(document.getElementById("inp").value));
            katex.render("°F = (°K - 273.5) \\cdot \\frac{9}{5} + 32", document.getElementById("formula"), {
              throwOnError:false
            });
        }
      if (to == "rankine") {
            document.getElementById("out").value = kelvinToRankine(parseInt(document.getElementById("inp").value));
            katex.render("°Ra = °K \\cdot 1.8", document.getElementById("formula"), {
              throwOnError:false
            });
        }
      if (to == "delisle") {
            document.getElementById("out").value = kelvinToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (373.15 - °K) \\cdot \\frac{3}{2})", document.getElementById("formula"), {
              throwOnError:false
            });
      }
        if (to == "newton") {
            document.getElementById("out").value = kelvinToNewton(parseInt(document.getElementById("inp").value));
          katex.render("°N = (°K-273.15) \\cdot \\frac{33}{100})", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = kelvinToReaumur(parseInt(document.getElementById("inp").value));
          katex.render("°R = (°K-273.15) \\cdot 0.8)", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = kelvinToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = (°K-273.15) \\cdot 0.525 + 7.5)", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
    if (fro == "fahrenheit") {
        if (to == "kelvin") {
            document.getElementById("out").value = fahrenheitToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = (°F-32) \\cdot \\frac{5}{9} + 273.15", document.getElementById("formula"), {
               throwOnError:false
            });
        }
        if (to == "celsius") {
            document.getElementById("out").value = fahrenheitToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = (°F-32) \\cdot frac{5}{9}", document.getElementById("formula"), {
               throwOnError:false
            });
        }
        if (to == "rankine") {
            document.getElementById("out").value = fahrenheitToRankine(parseInt(document.getElementById("inp").value));
          katex.render("°Ra = °F + 459.67", document.getElementById("formula"), {
               throwOnError:false
            });
        }
        if (to == "delisle") {
            document.getElementById("out").value = fahrenheitToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (212-°F) \\cdot \\frac{5}{6})", document.getElementById("formula"), {
               throwOnError:false
            });
        }
        if (to == "newton") {
            document.getElementById("out").value = fahrenheitToNewton(parseInt(document.getElementById("inp").value));
            katex.render("°N = (°F-32) \\cdot frac{11}{6}", document.getElementById("formula"), {
               throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = fahrenheitToReaumur(parseInt(document.getElementById("inp").value));
            katex.render("°R = (°F-32) \\cdot \\frac{5}{9}", document.getElementById("formula"), {
               throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = fahrenheitToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = (°F-32) \\cdot frac{7}{24} + 7.5", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
    if (fro == "rankine") {
        if (to == "kelvin") {
            document.getElementById("out").value = rankineToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = °Ra \\cdot \\frac{5}{9}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "celsius") {
            document.getElementById("out").value = rankineToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = (°Ra - 491.67) \\cdot \\frac{5}{9}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = rankineToFahrenheit(parseInt(document.getElementById("inp").value));
            katex.render("°F = °Ra - 459.67", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "delisle") {
            document.getElementById("out").value = rankineToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (671.67 - °Ra) \\cdot \\frac{5}{6} ", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "newton") {
            document.getElementById("out").value = rankineToNewton(parseInt(document.getElementById("inp").value));
            katex.render("°N = (°Ra - 491.67) \\cdot \\frac{11}{60}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = rankineToReaumur(parseInt(document.getElementById("inp").value));
            katex.render("°R = (°Ra - 491.67) \\cdot \\frac{4}{9}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = rankineToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = (°Ra - 491.67) \\cdot \\frac{7}{24} + 7.5", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
    if (fro == "delisle") {
        if (to == "kelvin") {
            document.getElementById("out").value = delisleToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = 373.15 - °D \\cdot \\frac{2}{3}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "celsius") {
            document.getElementById("out").value = delisleToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = 100 - °D \\cdot \\frac{2}{3}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = delisleToFahrenheit(parseInt(document.getElementById("inp").value));
            katex.render("°F = 212 - °D \\cdot \\frac{6}{5}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "rankine") {
            document.getElementById("out").value = delisleToRankine(parseInt(document.getElementById("inp").value));
            katex.render("°Ra = 671.67 - °D \\cdot \\frac{6}{5}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "newton") {
            document.getElementById("out").value = delisleToNewton(parseInt(document.getElementById("inp").value));
            katex.render("°N = 33 - °D \\cdot \\frac{11}{50}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = delisleToReaumur(parseInt(document.getElementById("inp").value));
            katex.render("°R = 80 - °D \\cdot \\frac{8}{15}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = delisleToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = 60 - °D \\cdot \\frac{7}{20}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
    if (fro == "newton") {
        if (to == "kelvin") {
            document.getElementById("out").value = newtonToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = °N \\cdot \\frac{100}{33} + 273.15", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "celsius") {
            document.getElementById("out").value = newtonToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = °N \\cdot \\frac{100}{33}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = newtonToFahrenheit(parseInt(document.getElementById("inp").value));  
            katex.render("°F = °N \\cdot \\frac{60}{11}+ 32", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "rankine") {
            document.getElementById("out").value = newtonToRankine(parseInt(document.getElementById("inp").value));
            katex.render("°Ra = °N \\cdot \\frac{60}{11} + 491.67", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "delisle") {
            document.getElementById("out").value = newtonToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (33 - °N) \\cdot \\frac{50}{11}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = newtonToReaumur(parseInt(document.getElementById("inp").value));
            katex.render("°R = °N \\cdot \\frac{80}{33}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = newtonToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = °N \\cdot \\frac{35}{22} + 7.5", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
    if (fro == "reaumur") {
        if (to == "kelvin") {
            document.getElementById("out").value = reaumurToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = °R \\cdot \\frac{5}{4} + 273.15", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "celsius") {
            document.getElementById("out").value = reaumurToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = °R \\cdot \\frac{5}{4}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = reaumurToFahrenheit(parseInt(document.getElementById("inp").value));
            katex.render("°F = °R \\cdot \\frac{9}{4} + 32", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "rankine") {
            document.getElementById("out").value = reaumurToRankine(parseInt(document.getElementById("inp").value));
            katex.render("°Ra = °R \\cdot \\frac{9}{4} + 491.67", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "delisle") {
            document.getElementById("out").value = reaumurToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (80 - °R) \\cdot \\frac{15}{8}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "newton") {
            document.getElementById("out").value = reaumurToNewton(parseInt(document.getElementById("inp").value));
            katex.render("°N = °R \\cdot \\frac{33}{80}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "romer") {
            document.getElementById("out").value = reaumurToRomer(parseInt(document.getElementById("inp").value));
            katex.render("°Rø = °R \\cdot \\frac{21}{32} + 7.5", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
  if (fro == "romer") {
        if (to == "kelvin") {
            document.getElementById("out").value = romerToKelvin(parseInt(document.getElementById("inp").value));
            katex.render("°K = (°Rø - 7.5) \\cdot \\frac{40}{21} - 273.15", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "celsius") {
            document.getElementById("out").value = romerToCelsius(parseInt(document.getElementById("inp").value));
            katex.render("°C = (°Rø - 7.5) \\cdot \\frac{40}{21}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "fahrenheit") {
            document.getElementById("out").value = romerToFahrenheit(parseInt(document.getElementById("inp").value));
            katex.render("°F = (°Rø - 7.5) \\cdot \\frac{24}{7} + 32", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "rankine") {
            document.getElementById("out").value = romerToRankine(parseInt(document.getElementById("inp").value));
            katex.render("°Ra = (°Rø - 7.5) \\cdot \\frac{24}{7} - 491.67", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "delisle") {
            document.getElementById("out").value = romerToDelisle(parseInt(document.getElementById("inp").value));
            katex.render("°D = (60 - °Rø) \\cdot \\frac{20}{7}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "newton") {
            document.getElementById("out").value = romerToNewton(parseInt(document.getElementById("inp").value));
            katex.render("°N = (°Rø - 7.5) \\cdot \\frac{22}{35}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
        if (to == "reaumur") {
            document.getElementById("out").value = romerToReaumur(parseInt(document.getElementById("inp").value));
            katex.render("°R = (°Rø - 7.5) \\cdot \\frac{32}{21}", document.getElementById("formula"), {
              throwOnError:false
            });
        }
    }
}

function celsiusToKelvin(input) {
    return input + 273.15;
}
function celsiusToFahrenheit(input) {
    return input * (9 / 5) + 32;
}
function celsiusToRankine(input) {
    return input * (9 / 5) + 273.15;
}
function celsiusToDelisle(input) {
    return (100 - input) * (3 / 2);
}
function celsiusToNewton(input) {
    return input * 0.33;
}
function celsiusToReaumur(input) {
    return input * 0.8;
}
function celsiusToRomer(input) {
    return input * (21 / 40) + 7.5;
}
function kelvinToCelsius(input) {
    return input - 273.15;
}
function kelvinToFahrenheit(input) {
    return (input-273.15) * (9 / 5) + 32;
}
function kelvinToRankine(input) {
    return input * 1.8;
}
function kelvinToDelisle(input) {
    return (373.15 - input) * (3 / 2);
}
function kelvinToNewton(input) {
    return (input - 273.15) * (33 / 100);
}
function kelvinToReaumur(input) {
    return (input - 273.15) * 0.8;
}
function kelvinToRomer(input) {
    return (input - 273.15) * 0.525 + 7.5;
}
function fahrenheitToCelsius(input) {
    return (input - 32) * (5 / 9);
}
function fahrenheitToKelvin(input) {
    return (input - 32) * (5 / 9) + 273.15;
}
function fahrenheitToRankine(input) {
    return input + 459.67;
}
function fahrenheitToDelisle(input) {
    return (212 - input) * (5 / 6);
}
function fahrenheitToNewton(input) {
    return (input - 32) * (11 / 60);
}
function fahrenheitToReaumur(input) {
    return (input - 32) * (4 / 9);
}
function fahrenheitToRomer(input) {
    return (input - 32) * (7 / 24) + 7.5;
}
function rankineToCelsius(input) {
    return (input - 491.67) * (5 / 9);
}
function rankineToKelvin(input) {
    return input * (5 / 9);
}
function rankineToFahrenheit(input) {
    return input - 459.67;
}
function rankineToDelisle(input) {
    return (671.67 - input) * (5 / 6);
}
function rankineToNewton(input) {
    return (input - 491.67) * (11 / 60);
}
function rankineToReaumur(input) {
    return (input - 491.67) * (4 / 9);
}
function rankineToRomer(input) {
    return (input - 491.67) * (7 / 24) + 7.5;
}
function delisleToCelsius(input) {
    return 100 - input * (2 / 3);
}
function delisleToKelvin(input) {
    return 373.15 - input * (2 / 3);
}
function delisleToFahrenheit(input) {
    return 212 - input * (6 / 5);
}
function delisleToRankine(input) {
    return 671.67 - input * (6 / 5);
}
function delisleToNewton(input) {
    return 33 - input * (11 / 50);
}
function delisleToReaumur(input) {
    return 80 - input * (8 / 15);
}
function delisleToRomer(input) {
    return 60 - input * (7 / 20);
}
function newtonToCelsius(input) {
    return input * (100 / 33);
}
function newtonToKelvin(input) {
    return input * (100 / 33) + 273.15;
}
function newtonToFahrenheit(input) {
    return input * (60 / 11) + 32;
}
function newtonToRankine(input) {
    return input * (60 / 11) + 491.67;
}
function newtonToDelisle(input) {
    return (33 - input) * (50 / 11);
}
function newtonToReaumur(input) {
    return input * (80 / 33);
}
function newtonToRomer(input) {
    return input * (35 / 22) + 7.5;
}
function reaumurToCelsius(input) {
    return input * (5 / 4);
}
function reaumurToKelvin(input) {
    return input * (5 / 4) + 273.15;
}
function reaumurToFahrenheit(input) {
    return input * (9 / 4) + 32;
}
function reaumurToRankine(input) {
    return input * (9 / 4) + 491.67;
}
function reaumurToDelisle(input) {
    return (80 - input) * (15 / 8);
}
function reaumurToNewton(input) {
    return input * (33 / 80);
}
function reaumurToRomer(input) {
    return input * (21 / 32) + 7.5;
}
function romerToCelsius(input) {
    return (input - 7.5) * (40 / 21);
}
function romerToKelvin(input) {
    return (input - 7.5) * (40 / 21) + 273.15;
}
function romerToFahrenheit(input) {
    return (input - 7.5) * (24 / 7) + 32;
}
function romerToRankine(input) {
    return (input - 7.5) * (24 / 7) + 491.67;
}
function romerToDelisle(input) {
    return (60 - input) * (20 / 7);
}
function romerToNewton(input) {
    return (input - 7.5) * (22 / 35);
}
function romerToReaumur(input) {
    return (input - 7.5) * (32 / 21);
}





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
}
