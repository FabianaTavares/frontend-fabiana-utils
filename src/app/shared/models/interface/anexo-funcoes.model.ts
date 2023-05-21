export function criaUrlDownloadAnexo(data: BlobPart): void {
	const blob = new Blob([data], { type: 'application/pdf' });
	const url = URL.createObjectURL(blob);
	window.open(url, '_blank');
}

export function criarUrlDownloadAnexoCSV(data: BlobPart, fileName: string): void {
	const a = document.createElement('a');
	document.body.appendChild(a);
	a.setAttribute('style', 'display: none');
	const blob = new Blob([data], { type: 'text/csv' });
	const url = URL.createObjectURL(blob);
	a.href = url;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(url);
}

export function dataURLtoFile(dataurl: string, filename: string): File {
	const arr = dataurl.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]);

	let n = bstr.length;
	const u8arr = new Uint8Array(n);

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime });
}

export function getBase64(array: Iterable<number>): string {
	const arrayChar = new Uint8Array(array);
	const stringChar = arrayChar.reduce((data, byte) => {
		return data + String.fromCharCode(byte);
	}, '');
	return btoa(stringChar);
}
