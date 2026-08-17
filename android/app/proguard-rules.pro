# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Expo modules resolve native modules by reflection (class name lookup), so R8
# must not rename or strip them, or the app crashes at runtime with "module not found".
-keep class expo.modules.** { *; }
-keepclassmembers class * extends expo.modules.kotlin.modules.Module { *; }

# Hermes internals used via JNI from the native engine.
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }

# Add any project specific keep options here:
