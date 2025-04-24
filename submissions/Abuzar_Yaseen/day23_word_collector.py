def word_freq(para):
    words = para.split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word,0)+1
    for word,count in freq.items():
            print(f"{word}:{count}")

sentence = input("Enter text: ")
word_freq(sentence)