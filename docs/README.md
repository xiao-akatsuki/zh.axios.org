---
sidebar: false
---

<p align="center"><img width="200" src="https://xiao-akatsuki.github.io/axios.org/logo/logo.svg" alt="axios logo"></p>

<p align="center">
	<a href="https://mvnrepository.com/artifact/io.github.xiao-organization/axios">
		<img src="https://img.shields.io/maven-central/v/io.github.xiao-organization/axios.svg" alt="maven-central">
	</a>
    &nbsp
	<a href="https://www.javadoc.io/doc/io.github.xiao-organization/axios">
		<img src="https://www.javadoc.io/badge/io.github.xiao-organization/axios.svg" alt="java-doc">
	</a>
</p>

<h1 align="center">axios</h1>

<h3 align="center">一个让java更容易发送HTTPS</h3>

<br>

****

<br>


:::: code-group
::: code-group-item 安装
```xml:no-line-numbers
<dependency>
  <groupId>io.github.xiao-organization</groupId>
  <artifactId>axios</artifactId>
  <version>1.0.0</version>
</dependency>
```
:::
::: code-group-item 使用
```java:no-line-numbers
Axios.get(
	"RollCall/people/axiosGet" 
).then(response ->{
	System.out.println(response);
});
```
:::
::::
