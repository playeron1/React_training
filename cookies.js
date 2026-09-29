export function getCookie(name) {
	const prefix = `${encodeURIComponent(name)}=`
	const cookie = document.cookie
		.split('; ')
		.find((entry) => entry.startsWith(prefix))

	return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : null
}

export function setCookie(name, value, maxAge = 60 * 60 * 24 * 180) {
	document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`
}

export function deleteCookie(name) {
	setCookie(name, '', 0)
}
