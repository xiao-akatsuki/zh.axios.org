# POST 请求

*如何使用 axios 执行 POST 请求*

## 实例

*执行“POST”请求*

```java
Axios.post(
	"demo/base/remove"
).then(value ->{
	System.out.println(value);
});
```



```java
Axios.post(
	url,
	new Body().add("name", "xiaoXunYao"),
).then(value ->{
	System.out.println(value);
});
```