# 基本用例
*使用 axios 的一个小例子*

## 实例

*执行 “get” 请求*

```java
Axios.get(
	"RollCall/people/axiosGet" 
).then(response ->{
	System.out.println(response);
});
```

```java
Axios.get(
	"RollCall/people/axiosGet",
	new Request().add("name", "xiaoXunYao") 
).then(value ->{
	System.out.println(value);
});
```