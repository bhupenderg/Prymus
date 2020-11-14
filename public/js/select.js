// const statesOne = ["Andhra Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi"]
// const statesTwo = ["Gujarat", "Haryana",	"Himachal Pradesh",	"Jammu and Kashmir", "Jharkhand", "Karnataka"]
// const statesThree = ["Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Mizoram", "Odisha"]
// const statesFour = ["Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana"]
// const statesFive = ["Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

const statesArr = ["Andhra Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi", "Gujarat", "Haryana",	"Himachal Pradesh",	"Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Mizoram", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

console.log(statesArr)

// const states1 = document.getElementById('states-1')
// const states2 = document.getElementById('states-2')
// const states3 = document.getElementById('states-3')
// const states4 = document.getElementById('states-4')
// const states5 = document.getElementById('states-5')
const statesAll = document.getElementById('states-all')

const getStates = []

// statesOne.forEach(el => {
// 	let para = document.createElement('p')
// 	para.innerHTML = el
// 	states1.appendChild(para)
// })


// statesTwo.forEach(el => {
// 	let para = document.createElement('p')
// 	para.innerHTML = el
// 	states2.appendChild(para)
// })

// statesThree.forEach(el => {
// 	let para = document.createElement('p')
// 	para.innerHTML = el
// 	states3.appendChild(para)
// })

// statesFour.forEach(el => {
// 	let para = document.createElement('p')
// 	para.innerHTML = el
// 	states4.appendChild(para)
// })

// statesFive.forEach(el => {
// 	let para = document.createElement('p')
// 	para.innerHTML = el
// 	states5.appendChild(para)
// })

statesArr.forEach(el => {
	let para = document.createElement('p')
	para.id = el.toLowerCase()
	let ah = el.replace(' ', '')
	para.innerHTML = `<a href = #${ah}>${el}</a>`
	statesAll.appendChild(para)
})



let inputState = document.querySelector('.input-state')

inputState.addEventListener('keyup', filterTasks)

function filterTasks(e) {
	const text = e.target.value.toLowerCase()
	


	document.querySelectorAll('#states-all p').forEach(task => {
		const item = task.textContent



		if(item.toLowerCase().indexOf(text) != -1){
			task.style.display = 'block'

			if(text === ''){
				task.style.display = 'none'
			}
		}

		else {
			task.style.display = 'none'
		}
	})
	 }

	 const citiesss = document.querySelectorAll('.citiesContainer')

	 const closeCity = document.querySelectorAll('.citiesContainer h1')

	 // City containers 

	 const andhrapradeshCitiesContainer = document.getElementById('andhrapradeshCitiesContainer')
	 // const assamCitiesContainer = document.getElementById('assamCitiesContainer')
	 // const biharCitiesContainer = document.getElementById('biharCitiesContainer')
	 // const chhattisgarhCitiesContainer = document.getElementById('chhattisgarhCitiesContainer')
 	//  const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const gujaratCitiesContainer = document.getElementById('gujaratCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')
	 // const himachalPradeshCitiesContainer = document.getElementById('himachalPradeshCitiesContainer')
	 // const jammuandkashmirCitiesContainer = document.getElementById('jammuandkashmirCitiesContainer')
	 // const jharkhandCitiesContainer = document.getElementById('jharkhandCitiesContainer')
	 // const karnatakaCitiesContainer = document.getElementById('karnatakaCitiesContainer')
	 // const keralaCitiesContainer = document.getElementById('keralaCitiesContainer')
	 // const madhyapradeshCitiesContainer = document.getElementById('madhyapradeshCitiesContainer')
	 // const maharashtraCitiesContainer = document.getElementById('maharashtraCitiesContainer')
	 // const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')
	 // const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')
	 // const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')
	 // const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')
	 // const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')
	 // const delhiCitiesContainer = document.getElementById('delhiCitiesContainer')
	 // const haryanaCitiesContainer = document.getElementById('haryanaCitiesContainer')



	 // const andhrapradesh = document.getElementById('andhrapradesh')
	 // const assam = document.getElementById('assam')
	 // const bihar = document.getElementById('bihar')
	 // const chhattisgarh = document.getElementById('chhattisgarh')
 	//  const delhi = document.getElementById('delhi')
	 // const gujarat = document.getElementById('gujarat')
	 // const haryana = document.getElementById('haryana')
	 // const himachalPradesh = document.getElementById('himachalPradesh')
	 // const jammuandkashmir = document.getElementById('jammuandkashmir')
	 // const jharkhand = document.getElementById('jharkhand')
	 // const karnataka = document.getElementById('karnataka')
	 // const kerala = document.getElementById('kerala')
	 // const madhyapradesh = document.getElementById('madhyapradesh')
	 // const maharashtra = document.getElementById('maharashtra')

	 const stateChoosen = document.querySelectorAll('#states-all p')

	 // stateChoosen.forEach(el => {
	 	document.addEventListener('click', (e) => {

	 		
	 		if(e.target.textContent.toLowerCase() === 'andhra pradesh'){
	 			andhraPradeshCitiesContainer.style.display = 'block'


	 		
	 		} else if(e.target.textContent.toLowerCase() === 'assam') {
	 			assamCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'bihar') {
	 			biharCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'chhattisgarh') {
	 			chhattisgarhCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'delhi') {
	 			delhiCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'gujarat') {
	 			gujaratCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'haryana') {
	 			haryanaCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'himachal pradesh') {
	 			himachalPradeshCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'jammu and kashmir') {
	 			jammuandkashmirCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'jharkhand') {
	 			jharkhandCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'karnataka') {
	 			karnatakaCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'kerala') {
	 			keralaCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'madhya pradesh') {
	 			madhyapradeshCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'maharashtra') {
	 			maharashtraCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'manipur') {
	 			manipurCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'mizoram') {
	 			mizoramCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'odisha') {
	 			odishaCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'puducherry') {
	 			puducherryCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'punjab') {
	 			punjabCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'rajasthan') {
	 			rajasthanCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'sikkim') {
	 			sikkimCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'tamil nadu') {
	 			tamilNaduCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'telangana') {
	 			telanganaCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'tripura') {
	 			tripuraCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'uttar pradesh') {
	 			uttarpradeshCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'uttarakhand') {
	 			uttarakhandCitiesContainer.style.display = 'block'
	 			
	 		} else if(e.target.textContent.toLowerCase() === 'west bengal') {
	 			westbengalCitiesContainer.style.display = 'block'
	 			
	 		}


	 		console.log(e.target.textContent.toLowerCase())
	 	})
	 

	 closeCity.forEach(el => {
	 	el.addEventListener('click', (e) => {
	 		if(e.target.parentElement.className = 'citiesContainer'){
	 			citiesss.forEach(el =>{
	 				el.style.display = 'none'
	 			})
	 		}
	 		console.log("Goood")
	 })
	 })
	 




	// const stateChoosen = document.querySelectorAll('#states-all p')
	// const citiD = document.querySelector('.city-container')
	// const cityId = document.getElementById('selectId')
	
	// stateChoosen.forEach(el =>{
	// 	el.addEventListener('click', (e) => {
	// 		let text = el.textContent
	// 		if(getStates.indexOf(text) === -1) {
	// 			getStates.push(text)
	// 			// el.style.backgroundColor = 'green'
	// 			cityId.style.display = 'block'
	// 			console.log(getStates)


			   
	// 		    }

	// 		else{
	// 			let getIndex = getStates.indexOf(text)
	// 			// getStates.splice(getIndex, 1)
	// 			// el.style.backgroundColor = 'transparent'
	// 			// cityId.style.display = 'none'
	// 			// console.log(getStates)
	// 		}


	// })	

	// })

	










