#Android build commands
ionic build android --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore denverdevday.keystore platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk alias_name
~/Library/Android/sdk/build-tools/24.0.0/zipalign -v 4 platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk denverdevday.apk



##to generate the keystore
keytool -genkey -v -keystore denverdevday.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000