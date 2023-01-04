export const listIsSelected = (lists) => {
	let isSelected = false
	for (let i = 0; i < lists.length; i++) {
		if (lists[i].selected === true) {
			isSelected = true
		}
	}
	return isSelected
}