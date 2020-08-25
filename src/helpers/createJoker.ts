export const createJoker = (
	codes: string[],
	world: string,
	room: string,
	event: string
): string[] => {
	if (codes.length === 0)
		return []
	return [`patch=1,EE,E0${(codes.length + 3)
			.toString(16)
			.padStart(2, "0")
			.toUpperCase()}${room}${world},extended,0032BAE0`,
		`patch=1,EE,E0${(codes.length + 2)
			.toString(16)
			.padStart(2, "0")
			.toUpperCase()}00${event},extended,0032BAE4`,
		`patch=1,EE,E0${(codes.length + 1)
			.toString(16)
			.padStart(2, "0")
			.toUpperCase()}00${event},extended,0032BAE6`,
		`patch=1,EE,E0${codes.length
			.toString(16)
			.padStart(2, "0")
			.toUpperCase()}00${event},extended,0032BAE8`].concat(codes);
};