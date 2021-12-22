---
sidebarDepth: 2
---

# 起步

*用于 Java 的基于 Promise 的 HTTP 客户端*

## 什么是 axios ？

axios 是一个基于 Promise 的 Java HTTP 客户端。 它是同构的（它可以在具有相同代码库的 Java 中运行）。 在服务器端，它使用原生 java `HttpUrlConnection`。

## 特征

- 从服务器生成XMLHttpRequests
- 从java发出HTTP请求
- 支持Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求

## 安装

:::: code-group
::: code-group-item Maven
```xml:no-line-numbers
<dependency>
  <groupId>io.github.xiao-organization</groupId>
  <artifactId>axios</artifactId>
  <version>0.0.1</version>
</dependency>
```
:::
::: code-group-item Gradle
```xml:no-line-numbers
implementation 'io.github.xiao-organization:axios:0.0.1'
```
:::
::::


