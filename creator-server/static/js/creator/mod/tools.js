layui.define(['layer', 'table', 'form', 'element', 'notice'], function (exports) {
	var layer = layui.layer;
	var table = layui.table;
	var form = layui.form;
	var toast = layui.notice;
	var $ = layui.jquery;

	const reconnectInterval = 5000;

	// 封装方法
	var mod = {

		connect(callback) {
			// 获取当前页面 URL
			const currentUrl = window.location.href;
			// 获取当前页面协议
			const currentProtocol = window.location.protocol;
			// 动态获取 WebSocket 地址
			let websocketUrl;
			// 判断是否为本地环境
			if (currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1')) {
				// 本地环境使用 ws 协议
				websocketUrl = `ws://127.0.0.1:8000/event`;
			} else {
				// 根据当前页面协议选择 ws 或 wss
				const wsProtocol = currentProtocol === 'https:' ? 'wss:' : 'ws:';
				const domain = window.location.host;
				websocketUrl = `${wsProtocol}//${domain}/event`;
			}
			socket = new WebSocket(websocketUrl);

			// 建立连接
			socket.onopen = function () {
				console.log("WebSocket connection established");
			};

			// 接收消息并更新日志
			socket.onmessage = function (event) {
				callback(event)
			};

			// 处理关闭事件
			socket.onclose = function () {
				console.log("WebSocket connection closed. Reconnecting in " + reconnectInterval / 1000 + " seconds...");
				setTimeout(mod.connect(callback), reconnectInterval);
			};

			// 处理错误事件
			socket.onerror = function (error) {
				console.error("WebSocket error: ", error);
				socket.close();
			};

			return socket
		},

		get: function (url, parames, callback, progress) {
			$.ajax({
				type: 'GET',
				url: url,
				data: parames,
				dataType: 'json',
				beforeSend: function (xhr, textStatus) {
					if (progress) {
						layer.msg('加载中', {
							icon: 16
						});
					}
				},
				success: function (data, textStatus) {
					if (data.code == 0) {
						if (callback) {
							callback(data);
						}
					} else {
						toast.error(data.message);
					}
				},
				complete: function (xhr, textStatus) {
					layer.closeAll();
				},
				cancel: function () {
				}
			});
		},

		post: function (url, parames, callback, progress) {
			$.ajax({
				type: 'POST',
				url: url,
				data: parames,
				contentType: 'application/json',
				dataType: 'json',
				beforeSend: function (xhr, textStatus) {
					if (progress) {
						layer.msg('加载中', {
							icon: 16
						});
					}
				},
				success: function (data, textStatus) {
					if (data.code == 0) {
						if (callback) {
							callback(data);
						}
					} else {
						toast.error(data.message);
					}
				},
				complete: function (xhr, textStatus) {
					layer.closeAll();
				},
				cancel: function () {
				}
			});
		},

		form: function (url, parames, callback) {
			layer.confirm('确定提交？', {
				icon: 1,
				title: '提示',
				btn: ['确定', '取消']
			}, function () {
				$.ajax({
					type: 'POST',
					url: url,
					data: parames,
					dataType: 'json',
					beforeSend: function (xhr, textStatus) {
						layer.msg('加载中', {
							icon: 16
						});
					},
					success: function (data, textStatus) {
						if (data.code == 0) {
							if (callback) {
								callback();
							}
						} else {
							toast.error(data.message);
						}
					},
					complete: function (xhr, textStatus) {
						layer.closeAll();
					},
					cancel: function () {
					}
				});
			});
		},

		remove: function (url) {
			var checkStatus = table.checkStatus(identifier);
			var data = checkStatus.data;
			if (data.length == 0) {
				layer.msg("请选择删除数据");
				toast.error("请选择删除数据");
				return;
			}
			layer.confirm('确认删除？', {
				icon: 3,
				title: '提示',
				btn: ['确定', '取消']
			}, function () {
				//
				var deleteParames = '';
				for (var i = 0; i < data.length; i++) {
					deleteParames = deleteParames + 'ids=' + data[i].id + "&";
				}
				console.log(deleteParames); // 记得删
				//
				$.ajax({
					type: 'POST',
					url: url,
					data: deleteParames,
					dataType: 'json',
					beforeSend: function (xhr, textStatus) {
						layer.msg('加载中', {
							icon: 16
						});
					},
					success: function (data, textStatus) {
						if (data.code == 0) {
							toast.success(data.message);
						} else {
							toast.error(data.message);
						}
					},
					complete: function (xhr, textStatus) {
						layer.closeAll();
					},
					cancel: function () {
					}
				});
			});
		},

		dialog: function (url, h) {
			layer.open({
				type: 2,
				title: false,
				content: [url],
				shade: 0.6,
				resize: true,
				area: ['64%', h],
				closeBtn: 2,
				anim: 0,
				isOutAnim: false,
				scrollbar: false,
				btnAlign: 'r',
				btn: ['提交', '返回'],
				yes: function (index, layero) {
					// 得到iframe页的窗口对象
					// var iframeWin = window[layero.find('iframe')[0]['name']];
					// iframeWin.reset();
					var iframeBody = layer.getChildFrame('body', index);
					iframeBody.find('#submit').click();
				},
				btn2: function (index, layero) {
					tobj.reload();
				}
			});
		},

		open: function (url, w, h) {
			layer.open({
				type: 2,// iframe层
				title: false,//弹层标题
				content: url,//弹层内容
				shade: 0.6,// 遮罩透明度
				shadeClose: true,// 点击遮罩区域，关闭弹层
				resize: true,//右下角允许拖拽
				area: [w, h],// 显示区
				closeBtn: 2,// 关闭图标2
				anim: 0,// 平滑放大
				scrollbar: false,//是否允许浏览器出现滚动条
			});
		},

		refresh: function () {
			// 关闭所有
			parent.layer.closeAll();
			// 刷新当前页
			setTimeout(function () {
				document.location = document.location;
			}, 1000)
		}
	};

	// 输出
	exports('tool', mod);
});
