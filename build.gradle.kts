import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

plugins {
    kotlin("multiplatform") version "1.4.30"
    application
}

group = "cloudself.cn"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
}

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }
    js(IR) {
        browser {
            binaries.executable()
            testTask {
                useKarma {
                    useChromeHeadless()
                }
            }
        }
    }
    sourceSets {
        val commonMain by getting
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val jvmMain by getting
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}

application {
    mainClassName = "MainKt"
}

tasks.getByName<KotlinWebpack>("jsBrowserProductionWebpack") {
    outputFileName = "output.js"
    doLast {
        val dtsFrom = File(projectDir, "/build/js/packages/query-pro-fe/kotlin/query-pro-fe.d.ts")
        val dts = File(projectDir, "/src/tsMain/src/query-pro-fe.d.ts")
//        org.jetbrains.kotlin.com.intellij.openapi.util.io.FileUtil.delete(dts)
        org.jetbrains.kotlin.com.intellij.openapi.util.io.FileUtil.copy(dtsFrom, dts)

        val jsFrom = File(projectDir, "/build/js/packages/query-pro-fe/kotlin/query-pro-fe.js")
        val js = File(projectDir, "/src/tsMain/src/query-pro-fe.js")
//        org.jetbrains.kotlin.com.intellij.openapi.util.io.FileUtil.delete(js)
        org.jetbrains.kotlin.com.intellij.openapi.util.io.FileUtil.copy(jsFrom, js)
    }
}
