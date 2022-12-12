const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


const computerSpecsToHTML = (obj) => {
let HtmlTime = `<section id="computer--${obj.id}">\n\t<h1>${obj.manufacturer} ${obj.make}</h1>\n\t<div>Model:${obj.model}</div>\n\t<div>Memory:${obj.specs.memory}</div>\n\t<div>Hard drive space:${obj.specs.hardDrive}</div>\n\t<div>Processor speed:${obj.specs.processor}</div>\n</section>`


return HtmlTime
};

console.log(computerSpecsToHTML(computer))