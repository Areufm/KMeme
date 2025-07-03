// 完全mock模拟数据 - 数据联动统一
const state = {
	// banner数据对象
	bannerList:[{
			bannerId: 1,
			image: 'https://picsum.photos/id/1018/800/400',
			title: '探索自然之美',
		},
		{
			bannerId: 2,
			image: 'https://picsum.photos/id/1015/800/400',
			title: '城市光影魅力',
		},
	    {
			bannerId: 3,
			image: 'https://picsum.photos/id/1084/800/400',
			title: '美食生活记录',
		},
	],
	// 精选相册数据对象 - 6个主题相册
	albumData: [
		{
			albumId: 101,
			id: 101,
			title: '自然风光',
			imgUrl: 'https://picsum.photos/id/1018/400/300',
			tag: '自然',
			description: '探索大自然的壮美风光',
			userId: 1
		},
		{
			albumId: 102,
			id: 102,
			title: '城市建筑',
			imgUrl: 'https://picsum.photos/id/1015/400/300',
			tag: '城市',
			description: '现代都市的建筑艺术',
			userId: 1
		},
		{
			albumId: 103,
			id: 103,
			title: '美食生活',
			imgUrl: 'https://picsum.photos/id/1084/400/300',
			tag: '美食',
			description: '品味生活中的美好滋味',
			userId: 1
		},
		{
			albumId: 104,
			id: 104,
			title: '艺术设计',
			imgUrl: 'https://picsum.photos/id/1025/400/300',
			tag: '艺术',
			description: '感受创意设计的无限魅力',
			userId: 1
		},
		{
			albumId: 105,
			id: 105,
			title: '宠物萌照',
			imgUrl: 'https://picsum.photos/id/237/400/300',
			tag: '宠物',
			description: '记录毛孩子们的可爱瞬间',
			userId: 1
		},
		{
			albumId: 106,
			id: 106,
			title: '旅行记录',
			imgUrl: 'https://picsum.photos/id/1036/400/300',
			tag: '旅行',
			description: '世界那么大，一起去看看',
			userId: 1
		}
	],
		// 按主题分类的图片数据对象 - 与相册主题对应
	imgData: [
		// === 自然风光类图片 (对应相册101) ===
		{
			imgId: 1,
			imgUrl: 'https://picsum.photos/id/1018/400/600',
			title: '森林晨曦',
			tag: ['自然', '森林'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 2,
			imgUrl: 'https://picsum.photos/id/1036/400/500',
			title: '雪山之巅',
			tag: ['自然', '山脉'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 3,
			imgUrl: 'https://picsum.photos/id/1022/400/450',
			title: '春花绽放',
			tag: ['自然', '花朵'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 4,
			imgUrl: 'https://picsum.photos/id/1013/400/550',
			title: '湖光山色',
			tag: ['自然', '湖泊'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 5,
			imgUrl: 'https://picsum.photos/id/1011/400/400',
			title: '田园风光',
			tag: ['自然', '田野'],
			isCollected: '已收藏',
			userId: 1
		},

		// === 城市建筑类图片 (对应相册102) ===
		{
			imgId: 6,
			imgUrl: 'https://picsum.photos/id/1015/400/300',
			title: '都市夜景',
			tag: ['城市', '夜景'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 7,
			imgUrl: 'https://picsum.photos/id/1082/400/650',
			title: '摩天大楼',
			tag: ['城市', '建筑'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 8,
			imgUrl: 'https://picsum.photos/id/325/400/500',
			title: '现代建筑',
			tag: ['城市', '建筑'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 9,
			imgUrl: 'https://picsum.photos/id/430/400/380',
			title: '城市街道',
			tag: ['城市', '街道'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 10,
			imgUrl: 'https://picsum.photos/id/1043/400/420',
			title: '建筑艺术',
			tag: ['城市', '艺术'],
			isCollected: '',
			userId: 1
		},

		// === 美食生活类图片 (对应相册103) ===
		{
			imgId: 11,
			imgUrl: 'https://picsum.photos/id/1084/400/300',
			title: '精致料理',
			tag: ['美食', '料理'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 12,
			imgUrl: 'https://picsum.photos/id/1055/400/350',
			title: '咖啡时光',
			tag: ['美食', '咖啡'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 13,
			imgUrl: 'https://picsum.photos/id/292/400/400',
			title: '甜蜜甜品',
			tag: ['美食', '甜品'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 14,
			imgUrl: 'https://picsum.photos/id/326/400/320',
			title: '新鲜果蔬',
			tag: ['美食', '果蔬'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 15,
			imgUrl: 'https://picsum.photos/id/941/400/500',
			title: '美食摆盘',
			tag: ['美食', '摆盘'],
			isCollected: '已收藏',
			userId: 1
		},

		// === 艺术设计类图片 (对应相册104) ===
		{
			imgId: 16,
			imgUrl: 'https://picsum.photos/id/1025/400/300',
			title: '抽象艺术',
			tag: ['艺术', '抽象'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 17,
			imgUrl: 'https://picsum.photos/id/102/400/420',
			title: '色彩构成',
			tag: ['艺术', '色彩'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 18,
			imgUrl: 'https://picsum.photos/id/180/400/480',
			title: '创意设计',
			tag: ['艺术', '设计'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 19,
			imgUrl: 'https://picsum.photos/id/225/400/380',
			title: '装置艺术',
			tag: ['艺术', '装置'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 20,
			imgUrl: 'https://picsum.photos/id/312/400/550',
			title: '视觉艺术',
			tag: ['艺术', '视觉'],
			isCollected: '已收藏',
			userId: 1
		},

		// === 宠物萌照类图片 (对应相册105) ===
		{
			imgId: 21,
			imgUrl: 'https://picsum.photos/id/237/400/400',
			title: '可爱小狗',
			tag: ['宠物', '狗狗'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 22,
			imgUrl: 'https://picsum.photos/id/40/400/320',
			title: '慵懒猫咪',
			tag: ['宠物', '猫咪'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 23,
			imgUrl: 'https://picsum.photos/id/169/400/500',
			title: '萌宠互动',
			tag: ['宠物', '互动'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 24,
			imgUrl: 'https://picsum.photos/id/433/400/450',
			title: '宠物写真',
			tag: ['宠物', '写真'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 25,
			imgUrl: 'https://picsum.photos/id/582/400/380',
			title: '动物乐园',
			tag: ['宠物', '乐园'],
			isCollected: '已收藏',
			userId: 1
		},

		// === 旅行记录类图片 (对应相册106) ===
		{
			imgId: 26,
			imgUrl: 'https://picsum.photos/id/1050/400/300',
			title: '旅行探险',
			tag: ['旅行', '探险'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 27,
			imgUrl: 'https://picsum.photos/id/1031/400/480',
			title: '古迹游览',
			tag: ['旅行', '古迹'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 28,
			imgUrl: 'https://picsum.photos/id/1062/400/450',
			title: '小径漫步',
			tag: ['旅行', '漫步'],
			isCollected: '已收藏',
			userId: 1
		},
		{
			imgId: 29,
			imgUrl: 'https://picsum.photos/id/176/400/550',
			title: '户外徒步',
			tag: ['旅行', '徒步'],
			isCollected: '',
			userId: 1
		},
		{
			imgId: 30,
			imgUrl: 'https://picsum.photos/id/1071/400/350',
			title: '日出美景',
			tag: ['旅行', '日出'],
			isCollected: '已收藏',
			userId: 1
		}
	]
};

export default {
	getBanner: () => {
		return {
			code: 1,
			data: {
				bannerList: state.bannerList
			},
			msg: 'Banner获取成功'
		}
	},
	getHomeList: (userId) => {
		return {
			code: 1,
			data: {
				albumData: state.albumData
			},
			msg: '首页列表获取成功'
		}
	},
			getAlbumImages: (albumId) => {
		console.log('获取相册图片，albumId:', albumId);

		// 根据6个精选相册主题过滤对应的图片
		const filtered = state.imgData.filter(item => {
			switch(Number(albumId)) {
				case 101: // 自然风光
					return item.tag.includes('自然');
				case 102: // 城市建筑
					return item.tag.includes('城市');
				case 103: // 美食生活
					return item.tag.includes('美食');
				case 104: // 艺术设计
					return item.tag.includes('艺术');
				case 105: // 宠物萌照
					return item.tag.includes('宠物');
				case 106: // 旅行记录
					return item.tag.includes('旅行');
				default:
					// 未知相册ID，返回所有图片
					return true;
			}
		});

		console.log('过滤后的图片数据:', filtered);

		return {
			code: 1,
			data: {
				albumData: filtered
			},
			msg: '相册图片获取成功'
		};
	},
	searchImages: (keyword) => {
		// 处理空关键词：直接返回空
		if (!keyword || typeof keyword !== 'string' || keyword.trim() === '') {
			return {
				code: 1,
				data: {
					imgData: state.imgData
				},
				msg: '关键词为空，未返回任何数据'
			};
		}
		// 忽略大小写，模糊匹配 title 或 tag
		const lowerKeyword = (keyword || '').toLowerCase();
		const filtered = state.imgData.filter(item => {
			const inTitle = item.title.toLowerCase().includes(lowerKeyword);
			const inTags = item.tag.some(t => t.toLowerCase().includes(lowerKeyword));
			return inTitle || inTags;
		});
		return {
			code: 1,
			data: {
				imgData: filtered
			},
			msg: '搜索成功'
		};
	},
	deleteImage: (id) => {
		const index = state.imgData.findIndex(item => item.id === id);
		if (index !== -1) {
			state.imgData.splice(index, 1);
			return { code: 1, msg: '删除成功' };
		}
		return { code: 0, msg: '未找到图片' };
	},

	// 收藏/取消收藏
	toggleCollect: (id, newStatus) => {
		const item = state.imgData.find(i => i.id === id);
		if (item) {
			item.isCollected = newStatus ? '已收藏' : '';
			return { code: 1, msg: '收藏状态已更新' };
		}
		return { code: 0, msg: '未找到图片' };
	},

	// 排序（按字段 ASC）
	sortImages: (key = 'title') => {
		return {
			code: 1,
			data: [...state.imgData].sort((a, b) => {
				const valA = (a[key] || '').toString();
				const valB = (b[key] || '').toString();
				return valA.localeCompare(valB);
			}),
			msg: '排序成功'
		};
	},

	// 微信登录mock
	login: (code) => {
		return {
			code: 1,
			data: {
				token: 'mock_token_' + Date.now(),
				userInfo: {
					id: 1,
					nickName: 'Mock用户',
					avatarUrl: 'https://picsum.photos/id/1005/100/100',
					description: '这是一个测试用户'
				}
			},
			msg: '登录成功'
		};
	},

	// 保存用户资料mock
	saveUserInfo: (userInfo) => {
		return {
			code: 1,
			data: userInfo,
			msg: '用户资料保存成功'
		};
	},

	// 获取月度统计数据mock
	getMonthStats: () => {
		return {
			code: 1,
			data: {
				uploadCount: 15,
				collectCount: 23,
				likeCount: 67,
				viewCount: 156,
				monthData: [
					{ month: '1月', uploads: 3, collections: 5 },
					{ month: '2月', uploads: 7, collections: 12 },
					{ month: '3月', uploads: 5, collections: 6 }
				]
			},
			msg: '月度统计获取成功'
		};
	},

	// 获取我的上传列表mock
	getMyUploads: (params = {}) => {
		return {
			code: 1,
			data: {
				list: state.imgData.slice(0, 4), // 返回前4张图片作为上传的
				total: state.imgData.length,
				pageSize: params.pageSize || 10,
				currentPage: params.page || 1
			},
			msg: '上传列表获取成功'
		};
	},

	// 更新通知设置mock
	updateNotificationSettings: (settings) => {
		return {
			code: 1,
			data: settings,
			msg: '通知设置更新成功'
		};
	},

	// 创建相册mock
	createAlbum: (albumData) => {
		const newAlbum = {
			albumId: state.albumData.length + 1,
			id: state.albumData.length + 1,
			...albumData,
			userId: 1
		};
		state.albumData.push(newAlbum);
		return {
			code: 1,
			data: newAlbum,
			msg: '相册创建成功'
		};
	},

	// 上传图片mock
	uploadImages: (imageData) => {
		const newImages = imageData.images.map((imagePath, index) => {
			return {
				imgId: state.imgData.length + index + 1,
				imgUrl: imagePath,
				title: imageData.title || `上传图片${index + 1}`,
				tag: imageData.tags || ['上传'],
				isCollected: '',
				userId: 1,
				category: imageData.category,
				description: imageData.description
			};
		});

		state.imgData.push(...newImages);
		return {
			code: 1,
			data: {
				uploadedImages: newImages,
				count: newImages.length
			},
			msg: '图片上传成功'
		};
	},

	// 获取收藏列表
	collectList: () => {
		// 筛选已收藏的图片
		const collected = state.imgData.filter(item => item.isCollected === '已收藏');
		return collected;
	}
}
