def find_brute(sample, pattern):
    sample_len, pattern_len = len(sample), len(pattern)

    for i in range(sample_len - pattern_len + 1):
        overlap_size = 0

        while overlap_size < pattern_len and sample[i + overlap_size] == pattern[overlap_size]:
            overlap_size += 1

        if overlap_size == pattern_len:
            return i
    return -1