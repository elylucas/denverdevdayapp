#Android build commands
ionic cordova build android --prod
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore denverdevday.keystore platforms/android/build/outputs/apk/release/android-release-unsigned.apk alias_name
~/Library/Android/sdk/build-tools/26.0.2/zipalign -v 4 platforms/android/build/outputs/apk/release/android-release-unsigned.apk denverdevday.apk



##to generate the keystore
keytool -genkey -v -keystore denverdevday.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
