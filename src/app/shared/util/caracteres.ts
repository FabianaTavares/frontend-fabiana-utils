export class Caracteres {
	public static removeAcentos(palavra: string): string {
		const map = {};

		return palavra.replace(/[\W[\] ]/g, function (params) {
			return map[params] || params;
		});
	}
}
