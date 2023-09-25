
# Vigenère Cipher Tool

- Tento skript bere pouze txt soubor na zašifrování/dešifrování a pouze když první řádek je vždy KLÍČ
- Není potřeba dodržovat velikost písmen, vše je převedeno na velká písmena

## Prequisites

Před použitím tohoto skriptu se ujistěte, že máte v systému nainstalován [Node.js](https://nodejs.org/).

## Instalace

1. Naklonujte nebo stáhněte tento repozitář do svého počítače.

2. Nainstalujte požadované balíčky Node.js spuštěním následujícího příkazu v adresáři projektu:

```shell
npm install
```

## Použití

Tento skript můžete použít k šifrování a dešifrování textových souborů. Zde jsou dostupné příkazy:

### Cipher

Chcete-li zašifrovat textový soubor pomocí Vigenèrovy šifry, spusťte následující příkaz:

```shell
node index.js cipher <inputFilePath>
```

Nahraďte `<inputFilePath>` cestou k textovému souboru, který chcete zašifrovat. Zašifrovaný text bude uložen do souboru s názvem `ciphertext.txt` v aktuálním adresáři.

Příklad: 
```shell
node index.js cipher ./opentext.txt
```

### Dešifrování

Chcete-li dešifrovat textový soubor, který byl dříve zašifrován pomocí Vigenèrovy šifry, spusťte následující příkaz:

```shell
node index.js decipher <inputFilePath>
```

Nahraďte `<inputFilePath>` cestou k textovému souboru, který chcete dešifrovat. Dešifrovaný text bude uložen do souboru s názvem `plaintext.txt` v aktuálním adresáři.

Příklad: 
```shell
node index.js decipher ./cipheredtodecipher.txt
```