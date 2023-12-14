function findShort(s) {
	return s.split(' ').reduce((cur, next) => (cur.length < next.length ? cur : next)).length
}

findShort('bitcoin take over the world maybe who knows perhaps') //?
