// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
      return {
      specimenNum: specimenNum,
      dna: dna,

        // mutates a random base, but checks to ensure it doesn't generate the same base
      mutate() {
        let randomMutation = Math.floor(Math.random() * this.dna.length);
        let newRandomBase = returnRandBase();
        while (this.dna[randomMutation] === newRandomBase) {
          newRandomBase = returnRandBase(); 
        }
        this.dna[randomMutation] = newRandomBase;
        return this.dna;
      },
  
      // compares two string of DNA to find the percentage that they have in common.
      compareDna(pAequorTwo) {
        let countMatch = 0;
        for (let i = 0; i < this.dna.length; i++){
            if (this.dna[i] === pAequorTwo.dna[i]){
              countMatch++;
            }
        };
        return `Specimen ${this.specimenNum} and specimen ${pAequorTwo.specimenNum} have ${(countMatch / 15 * 100).toFixed()}% DNA in common.`;
      },
  
      // finds how likely survival is based on two specific DNA elements
      willLikelySurvive() {
        let survivalBase = 0;
        for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === 'C'){
            survivalBase++
          } else if (this.dna[i] === 'G'){
            survivalBase++;
          }
        }
        if (survivalBase >= 9){
          survivalBase = true;
        } else return false;
        return survivalBase;
      },
    }
  };
  
  // generates 30 individual samples of DNA that are likely to survive
  const create30Samples = () => {
    let sampleList = [];
    for (let i = 1; i <= 30; i++) {
      let sample = pAequorFactory(i, mockUpStrand());
      sampleList.push(sample);
      let surviving = sample.willLikelySurvive();
      while (!surviving){
        sample.dna = mockUpStrand();
        surviving = sample.willLikelySurvive();
      }
      console.log(`Sample ${sample.specimenNum}: ${sample.dna.join(', ')} ${surviving}`);
    }
     return sampleList;
  };
  
  create30Samples();
  
  
  
  //const dna1 = pAequorFactory(1, mockUpStrand());
  //const dna2 = pAequorFactory(2, mockUpStrand());
  
  //console.log(DNA1.dna);
  //console.log(DNA1.mutate());
  
  //console.log(dna1.dna);
  //console.log(dna2.dna);
  //console.log(dna1.compareDna(dna2))
  //console.log(dna1.willLikelySurvive())
  
  
  
  
  
  
  
  