function DnaTranscriber () {}

DnaTranscriber.prototype.toRna = function (dna) {
  var rna = []

  for (var i = 0; i < dna.length; i++) {
    var current = dna[i]

    switch (current) {
      case 'C':
        rna.push('G')
        break
      case 'G':
        rna.push('C')
        break
      case 'A':
        rna.push('U')
        break
      case 'T':
        rna.push('A')
        break
    }
  }

  rna = rna.join('')
  return rna
}

module.exports = DnaTranscriber
