function find_brute(sample, pattern) {
    let sampleLen = sample.length, 
        patternLen = pattern.length,
        endPoint = sampleLen - patternLen + 1

    for (let i = 0; i < endPoint; i++) {
        overlapSize = 0
        
        while (overlapSize < patternLen && sample[i + overlapSize] === pattern[overlapSize]) {
            overlapSize += 1
        }
            
        if (overlapSize === patternLen) {
            return i
        }
    }
       
    return -1
}
 