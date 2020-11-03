
const CODES = {
	A: 65,
	Z: 90
}

function createRow(content, rowNamber = '') {
	return `
		<div class="row">
			<div class="row-info">${rowNamber}</div>
			<div class="row-data">${content}</div>
		</div>
	`
}

function toColumn(col) {
	return `<div class="column">${col}</div>`
}

function toCell() {
	return `<div class="cell" contenteditable></div>`
}


export function createTable(countRow = 15) {
	const colsCount = CODES.Z - CODES.A
	const rows = []
	const cols = []
	const cell = []

	for (let i = 0; i < colsCount + 1; i++) {
		let codes = CODES.A
		codes += i
		const toChar = String.fromCharCode(codes)
		cols.push(toColumn(toChar))
	}
	rows.push(createRow(cols.join('')))

	for (let i = 0; i < countRow; i++) {
		cell.splice(0)
		for (let i = 0; i < colsCount + 1; i++) {
			cell.push(toCell())
		}
		rows.push(createRow(cell.join(''), i + 1))
	}

	return rows.join('')
}

