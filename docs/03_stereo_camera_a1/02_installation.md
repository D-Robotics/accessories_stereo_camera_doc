---
sidebar_position: 2
title: 安装方法
description: A1 模组的物品清单、FFC/FPC 排线连接步骤，以及适配 RDK 开发板的安装方法。
---

# 安装方法

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## 物品清单

安装模组需要准备以下物品：

| 物品名称 | 物品图片 |
| --- | --- |
| A1 模组 | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_module.png" alt="A1 模组" /> |
| 开发板（适用板卡中支持的开发板） | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_supported_board.png" alt="开发板" /> |
| FFC/FPC 线缆 x2（22pin，0.5 mm 间距，同面触点） | <img className="table-item-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/01_stereo_camera_gs130w/zh/gs130w_ffc_cable.png" alt="FFC/FPC 线缆" /> |

## 安装与连接

### 将 FFC/FPC 线缆接入 A1 模组

:::warning 注意
- 连接 FFC/FPC 排线时，务必将开发板断电，避免因接触打火或触点错位导致的设备烧毁。
- FFC/FPC 排线是柔性材质导线，请勿大力拉扯。
- A1 模组的主 PCB 板为裸露设计，在安装和使用过程中避免金属物品落入以造成设备短路。
:::

1. 将 A1 模组的 MIPI Camera 接口连接器锁扣打开。
2. 将 FFC/FPC 线缆一端的触点方向朝向 PCB 板方向，水平插入 MIPI Camera 接口，然后按紧锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 A1 模组 MIPI Camera 接口的连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_ffc_to_module.png" alt="FFC 接入 A1 模组" width="70%" />

:::warning 注意

GS130WI、A1、A1P 模组与 GS130W 模组接入 FFC/FPC 排线的方向相反，此处注意区分，切勿反接。

:::

### 将 FFC/FPC 线缆接入开发板

<Tabs groupId="rdk-board">
<TabItem value="RDK X5">

1. 将 RDK X5 的 MIPI Camera 接口连接器锁扣打开。
2. 将 FFC/FPC 线缆另一端的触点方向朝向网口方向，垂直插入 MIPI Camera 接口，然后按紧连接器锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK X5 MIPI Camera 接口的连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-1.png" alt="FFC 接入开发板" width="70%" />

安装完成后，A1 模组、RDK X5 和 FFC/FPC 线缆的整体连接如下图所示。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5-2.png" alt="A1 与 RDK X5 连接" width="80%" />

</TabItem>
<TabItem value="RDK X5 Module">

1. 将 RDK X5 Module 载板的 MIPI Camera 接口连接器锁扣打开。
2. 将 FFC/FPC 线缆另一端的触点方向朝向 PCB 方向，水平插入 MIPI 接口，然后按紧连接器锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK X5 Module 载板 MIPI Camera 接口的连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-1.png" alt="A1 与 RDK X5 Module 连接" width="70%" />

安装完成后，A1 模组、RDK X5 Module 和 FFC/FPC 线缆的整体连接如下图所示。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_x5_module-2.png" alt="A1 与 RDK X5 Module 连接" width="80%" />

</TabItem>
<TabItem value="RDK S100/S100P">

1. 将安装了 Camera 扩展板的 RDK S100 的 MIPI Camera 接口锁扣打开。
2. 将 FFC/FPC 线缆另一端的触点方向朝向 PCB 方向，水平插入 MIPI Camera 接口，然后按紧连接器锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK S100 MIPI Camera 接口的连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-1.png" alt="A1 与 RDK S100 连接" width="70%" />

安装完成后，A1 模组、RDK S100 和 FFC/FPC 线缆的整体连接如下图所示。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_connection_s100-2.png" alt="A1 与 RDK S100 连接" width="80%" />

</TabItem>
<TabItem value="RDK S600">

1. 将 RDK S600 的 MIPI Camera 接口连接器锁扣打开。
2. 将 FFC/FPC 线缆另一端的触点方向朝向 PCB 方向（朝上），水平插入 MIPI Camera 接口，然后按紧连接器锁扣。
3. 第二根 FFC/FPC 线缆同理，完成 FFC/FPC 线缆与 RDK S600 MIPI Camera 接口的连接。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/02_stereo_camera_gs130wi/zh/gs130wi_ffc_to_board_s600.png" alt="FFC 接入 RDK S600" width="70%" />

安装完成后，A1 模组、RDK S600 和 FFC/FPC 线缆的整体连接如下图所示。

<img src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/03_stereo_camera_a1/zh/a1_connection_s600.png" alt="A1 与 RDK S600 连接" width="80%" />

</TabItem>
</Tabs>
