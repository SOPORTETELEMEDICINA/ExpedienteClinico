import jsSHA from 'jssha';

export class ShaService {
    constructor() {}

    /**
     * Encripta un string usando SHA
     * @param wordToEncrypt - Texto a encriptar
     * @param rounds - Número de iteraciones (por defecto 1000)
     * @param shaType - Algoritmo SHA permitido
     * @param outType - Formato de salida permitido
     * @returns {string} - Texto encriptado en el formato deseado
     */
    encrypt(
        wordToEncrypt: string,
        rounds: number = 1000,
        shaType: 'SHA-1' | 'SHA-224' | 'SHA3-224' | 'SHA-256' | 'SHA3-256' | 'SHA-384' | 'SHA3-384' | 'SHA-512' | 'SHA3-512' = 'SHA-256',
        outType: 'HEX' | 'B64' | 'BYTES' | 'ARRAYBUFFER' = 'HEX'
    ): string {
        const encrypter = new jsSHA(shaType, 'TEXT', { numRounds: rounds });
        encrypter.update(wordToEncrypt);

        // 🚀 Separamos los tipos de salida para evitar errores en `getHash()`
        switch (outType) {
            case 'HEX':
                return encrypter.getHash('HEX');
            case 'B64':
                return encrypter.getHash('B64');
            case 'BYTES':
                return encrypter.getHash('BYTES');
            case 'ARRAYBUFFER':
                return new TextDecoder().decode(encrypter.getHash('ARRAYBUFFER') as ArrayBuffer);
            default:
                throw new Error(`Formato de salida no válido: ${outType}`);
        }
    }
}
