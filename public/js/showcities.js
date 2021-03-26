const showCitiesBtn = document.querySelector('.showing-cities')
        showCitiesBtn.addEventListener('click', () => {
            document.querySelector('.showSelctedCities').classList.toggle('hideClass')
        })
        let arrCities = []
        let arrAp = []
        let arrUttrakhand = []
        let arrAssam = []
        let arrBihar = []
        let arrChhasttisgarh = []
        let arrDelhi = []
        let arrGujarat = []
        
        let arrHaryana = []
        let arrHp = []
        let arrJk = []
        let arrJharkhand = []
        let arrKarnatka = []
        let arrKerala = []
        let arrMp = []
        let arrMaharashtra = []
        let arrManipur = []
        let arrMizoram = []
        let arrOdisha = []
        let arrPuducherry = []
        let arrPunjab = []
        let arrRajasthan = []
        let arrSikkim = []
        let arrTn = []
        let arrTelangana = []
        let arrTripura = []
        let arrUp = []
        let arrWb = []
        




        function func123() {

            document.querySelector('.selectedCities h2').innerHTML = ''

             arrCities = []
             arrAp = []
             arrUttrakhand = []


            let seluttarakhand = document.getElementById('selectuttarakhand')
            for (let i = 0; i < seluttarakhand.options.length; i++) {
            if(seluttarakhand.options[i].selected === true) {
                // let x = ""
                // x += seluttarakhand.options[i].value + " "

                arrUttrakhand.push(seluttarakhand.options[i].value + " ")
                
            }
        }

        

        let selectaAndhraPradesh = document.getElementById('selectaAndhraPradesh')
        for (let i = 0; i < selectaAndhraPradesh.options.length; i++) {
            if(selectaAndhraPradesh.options[i].selected === true) {
                // let x = ""
                // x += selectaAndhraPradesh.options[i].value + " "

                arrAp.push(selectaAndhraPradesh.options[i].value + " ")
                
            }
        }


        let selectAssam = document.getElementById('selectAssam')
        for (let i = 0; i < selectAssam.options.length; i++) {
            if(selectAssam.options[i].selected === true) {
                // let x = ""
                // x += selectAssam.options[i].value + " "

                arrAssam.push(selectAssam.options[i].value + " ")
                
            }
        }



        let selectBihar = document.getElementById('selectBihar')
        for (let i = 0; i < selectBihar.options.length; i++) {
            if(selectBihar.options[i].selected === true) {
                // let x = ""
                // x += selectBihar.options[i].value + " "

                arrBihar.push(selectBihar.options[i].value + " ")
                
            }
        }


        let selectChhasttisgarh = document.getElementById('selectChhasttisgarh')
        for (let i = 0; i < selectChhasttisgarh.options.length; i++) {
            if(selectChhasttisgarh.options[i].selected === true) {
                // let x = ""
                // x += selectChhasttisgarh.options[i].value + " "

                arrChhattisgarh.push(selectChhasttisgarh.options[i].value + " ")
                
            }
        }


        let selectDelhi = document.getElementById('selectDelhi')
        for (let i = 0; i < selectDelhi.options.length; i++) {
            if(selectDelhi.options[i].selected === true) {
                // let x = ""
                // x += selectDelhi.options[i].value + " "

                arrDelhi.push(selectDelhi.options[i].value + " ")
                
            }
        }


        let selectGujarat = document.getElementById('selectGujarat')
        for (let i = 0; i < selectGujarat.options.length; i++) {
            if(selectGujarat.options[i].selected === true) {
                // let x = ""
                // x += selectGujarat.options[i].value + " "

                arrGujarat.push(selectGujarat.options[i].value + " ")
                
            }
        }


        let selectHaryna = document.getElementById('selectHaryna')
        for (let i = 0; i < selectHaryna.options.length; i++) {
            if(selectHaryna.options[i].selected === true) {
                // let x = ""
                // x += selectHaryna.options[i].value + " "

                arrHaryana.push(selectHaryna.options[i].value + " ")
                
            }
        }

        let selectHimachalPradesh = document.getElementById('selectHimachalPradesh')
        for (let i = 0; i < selectHimachalPradesh.options.length; i++) {
            if(selectHimachalPradesh.options[i].selected === true) {
                // let x = ""
                // x += selectHimachalPradesh.options[i].value + " "

                arrHp.push(selectHimachalPradesh.options[i].value + " ")
                
            }
        }

        let selectjammuandkashmir = document.getElementById('selectjammuandkashmir')
        for (let i = 0; i < selectjammuandkashmir.options.length; i++) {
            if(selectjammuandkashmir.options[i].selected === true) {
                // let x = ""
                // x += selectjammuandkashmir.options[i].value + " "

                arrJk.push(selectjammuandkashmir.options[i].value + " ")
                
            }
        }


        let selectjharkhand = document.getElementById('selectjharkhand')
        for (let i = 0; i < selectjharkhand.options.length; i++) {
            if(selectjharkhand.options[i].selected === true) {
                // let x = ""
                // x += selectjharkhand.options[i].value + " "

                arrJharkhand.push(selectjharkhand.options[i].value + " ")
                
            }
        }


        let selectkarnataka = document.getElementById('selectkarnataka')
        for (let i = 0; i < selectkarnataka.options.length; i++) {
            if(selectkarnataka.options[i].selected === true) {
                // let x = ""
                // x += selectkarnataka.options[i].value + " "

                arrKarnatka.push(selectkarnataka.options[i].value + " ")
                
            }
        }


        let selectkerala = document.getElementById('selectkerala')
        for (let i = 0; i < selectkerala.options.length; i++) {
            if(selectkerala.options[i].selected === true) {
                // let x = ""
                // x += selectkerala.options[i].value + " "

                arrKerala.push(selectkerala.options[i].value + " ")
                
            }
        }


        let selectmadhyapradesh = document.getElementById('selectmadhyapradesh')
        for (let i = 0; i < selectmadhyapradesh.options.length; i++) {
            if(selectmadhyapradesh.options[i].selected === true) {
                // let x = ""
                // x += selectmadhyapradesh.options[i].value + " "

                arrMp.push(selectmadhyapradesh.options[i].value + " ")
                
            }
        }


        let selectmaharashtra = document.getElementById('selectmaharashtra')
        for (let i = 0; i < selectmaharashtra.options.length; i++) {
            if(selectmaharashtra.options[i].selected === true) {
                // let x = ""
                // x += selectmaharashtra.options[i].value + " "

                arrMaharashtra.push(selectmaharashtra.options[i].value + " ")
                
            }
        }


        let selectmanipur = document.getElementById('selectmanipur')
        for (let i = 0; i < selectmanipur.options.length; i++) {
            if(selectmanipur.options[i].selected === true) {
                // let x = ""
                // x += selectmanipur.options[i].value + " "

                arrManipur.push(selectmanipur.options[i].value + " ")
                
            }
        }


        let selectmizoram = document.getElementById('selectmizoram')
        for (let i = 0; i < selectmizoram.options.length; i++) {
            if(selectmizoram.options[i].selected === true) {
                // let x = ""
                // x += selectmizoram.options[i].value + " "

                arrMizoram.push(selectmizoram.options[i].value + " ")
                
            }
        }


        let selectodisha = document.getElementById('selectodisha')
        for (let i = 0; i < selectodisha.options.length; i++) {
            if(selectodisha.options[i].selected === true) {
                // let x = ""
                // x += selectodisha.options[i].value + " "

                arrOdisha.push(selectodisha.options[i].value + " ")
                
            }
        }


        let selectpuducherry = document.getElementById('selectpuducherry')
        for (let i = 0; i < selectpuducherry.options.length; i++) {
            if(selectpuducherry.options[i].selected === true) {
                // let x = ""
                // x += selectpuducherry.options[i].value + " "

                arrPuducherry.push(selectpuducherry.options[i].value + " ")
                
            }
        }


        let selectpunjab = document.getElementById('selectpunjab')
        for (let i = 0; i < selectpunjab.options.length; i++) {
            if(selectpunjab.options[i].selected === true) {
                // let x = ""
                // x += selectpunjab.options[i].value + " "

                arrPunjab.push(selectpunjab.options[i].value + " ")
                
            }
        }


        let selectrajasthan = document.getElementById('selectrajasthan')
        for (let i = 0; i < selectrajasthan.options.length; i++) {
            if(selectrajasthan.options[i].selected === true) {
                // let x = ""
                // x += selectrajasthan.options[i].value + " "

                arrRajasthan.push(selectrajasthan.options[i].value + " ")
                
            }
        }


        let selectsikkim = document.getElementById('selectsikkim')
        for (let i = 0; i < selectsikkim.options.length; i++) {
            if(selectsikkim.options[i].selected === true) {
                // let x = ""
                // x += selectsikkim.options[i].value + " "

                arrSikkim.push(selectsikkim.options[i].value + " ")
                
            }
        }


        let selecttamilNadu = document.getElementById('selecttamilNadu')
        for (let i = 0; i < selecttamilNadu.options.length; i++) {
            if(selecttamilNadu.options[i].selected === true) {
                // let x = ""
                // x += selecttamilNadu.options[i].value + " "

                arrTn.push(selecttamilNadu.options[i].value + " ")
                
            }
        }


        let selecttelangana = document.getElementById('selecttelangana')
        for (let i = 0; i < selecttelangana.options.length; i++) {
            if(selecttelangana.options[i].selected === true) {
                // let x = ""
                // x += selecttelangana.options[i].value + " "

                arrTelangana.push(selecttelangana.options[i].value + " ")
                
            }
        }


        let selecttripura = document.getElementById('selecttripura')
        for (let i = 0; i < selecttripura.options.length; i++) {
            if(selecttripura.options[i].selected === true) {
                // let x = ""
                // x += selecttripura.options[i].value + " "

                arrTripura.push(selecttripura.options[i].value + " ")
                
            }
        }


        let selectuttarpradesh = document.getElementById('selectuttarpradesh')
        for (let i = 0; i < selectuttarpradesh.options.length; i++) {
            if(selectuttarpradesh.options[i].selected === true) {
                // let x = ""
                // x += selectuttarpradesh.options[i].value + " "

                arrUp.push(selectuttarpradesh.options[i].value + " ")
                
            }
        }

        let selectwestbengal = document.getElementById('selectwestbengal')
        for (let i = 0; i < selectwestbengal.options.length; i++) {
            if(selectwestbengal.options[i].selected === true) {
                // let x = ""
                // x += selectwestbengal.options[i].value + " "

                arrWb.push(selectwestbengal.options[i].value + " ")
                
            }
        }



        arrCities = [ ...arrUttrakhand, ...arrAp, ...arrAssam, ...arrBihar, ...arrChhasttisgarh, ...arrDelhi, ...arrGujarat, ...arrHaryana, ...arrHp, ...arrJharkhand, ...arrJk, ...arrKarnatka, ...arrKerala, ...arrMaharashtra, ...arrManipur, ...arrMizoram, ...arrMp, ...arrOdisha, ...arrPuducherry, ...arrPunjab, ...arrRajasthan, ...arrSikkim, ...arrTelangana, ...arrTn, ...arrTripura, ...arrUp, ...arrWb]
        const uniqueCities = [...new Set(arrCities)]
        
        uniqueCities.forEach(el => {
            document.querySelector('.selectedCities h2').innerHTML += el + "<br>"
        })
        
        
    }