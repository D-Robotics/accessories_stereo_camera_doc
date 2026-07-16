---
sidebar_position: 2
---

# 1.2 安装方法

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocScope from '@site/src/components/DocScope';
```

## 物品清单

安装模组需要准备以下物品：


| 物品名称 | 物品图片 |
| --- | --- |
| GS130W 模组 | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_module.png" alt="GS130W 模组" /> |
| 开发板（适用板卡中支持的开发板） | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_supported_board.png" alt="开发板" /> |
| FFC/FPC 线缆 x2（22pin，0.5mm 间距，同面触点） | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_ffc_cable.png" alt="FFC/FPC 线缆" /> |


## 安装与连接

### 将 FFC/FPC 线缆接入 GS130W 模组


:::warning 注意
- 连接 FFC/FPC 排线时，务必将开发板断电，避免因接触打火或触点错位导致的设备烧毁。
- FFC/FPC 排线是柔性材质导线，请勿大力拉扯。
- GS130W 模组的主 PCB 板为裸露设计，在安装和使用过程中避免金属物品落入以造成设备短路。
:::

1. 将 GS130W 模组的 MIPI Camera 接口连接器锁扣打开。
2. 将 FFC/FPC 线缆一端的触点方向朝向 PCB 板反方向，水平插入 MIPI Camera 接口，然后按紧锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 GS130W 模组 MIPI Camera 接口的连接。

![FFC 接入 GS130W 模组](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_ffc_to_module.png)

:::warning 注意

GS130W 模组与 GS130WI 模组接入 FFC/FPC 排线的方向相反，此处注意区分，切勿反接。

:::

### 将 FFC/FPC 线缆接入开发板


<Tabs groupId="rdk-board">
<TabItem value="RDK X5">


1. 将 RDK X5 的 MIPI Camera 接口连接器锁扣打开。
2. 将 FFC/FPC 线缆另一端的触点方向朝向网口方向，垂直插入 MIPI Camera 接口，然后按紧连接器锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK X5 MIPI Camera 接口的连接。

![FFC 接入开发板](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5-1.png)


安装完成后，GS130W 模组、RDK X5 和 FFC/FPC 线缆的整体连接如下图所示。

![GS130W 与 RDK X5 连接](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5-2.png)

</TabItem>
<TabItem value="RDK X5 Module">

1. 将 RDK X5 Module 载板的 MIPI Camera 接口连接器锁扣打开；
2. 将 FFC/FPC 线缆另一端的触点方向朝向 PCB 方向，水平插入 MIPI 接口，然后按紧连接器锁扣；
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK X5 Module 载板 MIPI Camera 接口的连接。

![GS130W 与 RDK X5 Module 连接](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5_module-1.png)


安装完成后，GS130W 模组、RDK X5 Module 和 FFC/FPC 线缆的整体连接如下图所示。

![GS130W 与 RDK X5 Module 连接](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_x5_module-2.png)


</TabItem>
<TabItem value="RDK S100/S100P">

1. 将安装了 Camera 扩展板的 RDK S100 的 MIPI Camera 接口锁扣打开；
2. 将 FFC/FPC 线缆另一端的触点方向朝向 PCB 方向，水平插入 MIPI Camera 接口，然后按紧连接器锁扣；
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK S100 MIPI Camera 接口的连接。

![GS130W 与 RDK S100 连接](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_s100-1.png)


安装完成后，GS130W 模组、RDK S100 和 FFC/FPC 线缆的整体连接如下图所示。

![GS130W 与 RDK S100 连接](https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_connection_s100-2.png)

</TabItem>
</Tabs>


