let quantidadeVitorias = 130
let quantidadeDerrotas = 20
let vitorias = calculaVitorias(quantidadeVitorias, quantidadeDerrotas)
let rank = calculaNivel(quantidadeVitorias, quantidadeDerrotas)

function calculaVitorias(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function calculaNivel(vitorias, derrotas) {
    let saldoVitorias = calculaVitorias(vitorias, derrotas)
    let rank
    if (saldoVitorias <= 10) {
        rank = "Ferro"
    } else if (saldoVitorias <= 20) {
        rank = "Bronze"
    } else if (saldoVitorias <= 50) {
        rank = "Prata"
    } else if (saldoVitorias <= 80) {
        rank = "Ouro"
    } else if (saldoVitorias <= 90) {
        rank = "Diamante"
    } else if (saldoVitorias <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }
    return rank
}

console.log(`O Herói tem de saldo de ${vitorias} vitórias está no nível de ${rank}`)