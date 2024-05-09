eps = 1e-5
# Booleran array dimana setiap nilai mengindikasinya untuk tetap kita jaga nilai frekuensinya
frequenciesToRemove = (1 - eps) * np.sum(abs_ch1_Fourier) < np.cumsum(abs_ch1_Fourier)
# frekuensi yang di potong dibagian spectrum
f0 = (len(frequenciesToRemove) - np.sum(frequenciesToRemove) )* (Fs / 2) / (n / 2)
print("f0 : {} Hz".format(int(f0)))
# menampilkan spectrum dengan garis vertikal untuk f0
plt.axvline(f0, color='r')
plt.plot(np.linspace(0, Fs / 2, n//2), abs_ch1_Fourier)
plt.ylabel('Spectrum')
plt.xlabel('$f$ (Hz)')
plt.show()
