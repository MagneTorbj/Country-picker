var land_array = new Array(); 
        land_array[0] = "";
        land_array[1] = "Afghanistan,Armenia,Azerbaijan,Bahrain,Bangladesh,Bhutan,British,Brunei,Cambodia,China,Cyprus,Egypt,Georgia,HongKong,India,Indonesia,Iran,Iraq,Israel,Japan,Jordan,Kazakhstan,Kuwait,Kyrgyzstan,Laos,Lebanon,Macau,Malaysia,Maldives,Mongolia,Myanmar,Nepal,NorthKorea,Oman,Pakistan,Palestine,Philippines,Qatar,Russia,SaudiArabia,Singapore,SouthKorea,SriLanka,Syria,Taiwan,Tajikistan,Thailand,Timor,Turkey,Turkmenistan,UnitedArabEmirates,Uzbekistan,Vietnam,Yemen ";
        land_array[2] = "Algeria,Angola,Benin,Botswana,Burkina Faso,Burundi,Cabo Verde/Cape Verde,Cameroon,Central African Republic,Chad,Comoros,Congo/Republic of the Congo,Democratic Republic of the Congo,Djibouti,Egypt ,Equatorial Guinea,Eritrea,Eswatini ,Ethiopia,Gabon,Gambia,The Ghana,Guinea,Guinea-Bissau,Ivory Coast/Republic of Côte d'Ivoire,Kenya,Lesotho,Liberia,Libya,Madagascar,Malawi,Mali,Mauritania,Mauritius,Morocco,Mozambique,Namibia,Niger,Nigeria,Rwanda,Sao Tome and Principe,Senegal,Seychelles,Sierra Leone,Somalia,South Africa,South Sudan,Sudan,Tanzania,Togo,Tunisia,Uganda,Zambia,Zimbabwe";
        land_array[3] = "Albania,Andorra,Armenia (transcontinental - generally considered Asian),Austria,Azerbaijan (transcontinental - generally considered Asian),Belarus,Belgium,Bosnia and Herzegovina,Bulgaria,Croatia,Cyprus (generally considered European),Czechia/Czech Republic,Denmark,Estonia,Finland,France,Georgia (transcontinental - generally considered Asian),Germany,Greece,Hungary,Iceland,Ireland,Italy,Kazakhstan (transcontinental - generally considered Asian),Latvia,Liechtenstein,Lithuania,Luxembourg,Malta,Moldova,Monaco,Montenegro,Netherlands,North Macedonia,Norway,Poland,Portugal,Romania,Russia (transcontinental - generally considered European),San Marino,Serbia,Slovakia,Slovenia,Spain,Sweden,Switzerland,Turkey (transcontinental - generally considered European),Ukraine,United Kingdom,Vatican City (Holy See)";
        land_array[4] = "Antigua and Barbuda,Bahamas,Barbados,Belize,Canada,Costa Rica,Cuba,Dominica,Dominican Republic,El Salvador,Grenada,Guatemala,Haiti,Honduras,Jamaica,Mexico,Nicaragua,Panama,Saint Kitts and Nevis,Saint Lucia,Saint Vincent and the Grenadines,Trinidad and Tobago,United States of America"
        land_array[5] = "Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Guyana,Paraguay,Peru,Suriname,Uruguay,Venezuela"
        land_array[6] = "Adélie Land (France),British Antarctic Territory (UK),Chilean Antarctic Territory (Chile),Peter I Island (Norway),Queen Maud Land (Norway),Ross Dependency (New Zealand)"
        land_array[7] = "Australia,Fiji,Kiribati,Marshall Islands,Micronesia,Nauru,New Zealand,Palau,Papua New Guinea,Samoa,Solomon Islands,Tonga,Tuvalu,Vanuatu"

        function fyll_land() { 
            var Landliste = land_array[kontinent.selectedIndex].split(","); 
            land.length = 0; 
            land.selectedIndex = 0; 
            for (i = 0; i < Landliste.length; i++) {  
                land.options[i + 1] = new Option(Landliste[i], Landliste[i]) 
            }
        }

        function fjern() { 
            var nostr = "" 
            var str = ""  
            var c = document.getElementsByName("check");
            for (var i = 0; i < c.length; i++) {
                if (c[i].type == 'checkbox') {
                    if (c[i].checked == false) {
                        nostr += '<input type="checkbox" value="' + c[i].value + '" name="check">  ' + c[i].value + "<br>";

                    } else {
                        str += c[i].value + "\n"
                    }

                }
            }
            str += "Har blitt fjernet" 
            document.getElementById("registrerte").innerHTML = nostr 
            alert(str) 
        }

        function registrer() { 
            var kontinent = document.getElementById("kontinent").value 
            var land = document.getElementById("land").value 
            document.getElementById("registrerte").innerHTML += '<input type="checkbox" value="' + kontinent + '-' + land + '" name="check">  ' + kontinent + ' - ' + land + '<br>' 
        }