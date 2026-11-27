---
sidebar_position: 0
sidebar_label: RDK 双目摄像头用户手册
title: RDK 双目摄像头用户手册
description: RDK 双目摄像头模组总览，对比 GS130W、GS130WI、A1、A1P 的适用平台、分辨率、基线与 IMU 配置。
---

# RDK 双目摄像头用户手册

本文档面向 D-Robotics RDK™ 开发者套件配套的双目摄像头模组，提供选型、安装、点亮与二次开发指引。

## 产品简介

RDK™ 双目摄像头模组适用于机器人视觉、机器视觉检测及运动姿态感知等应用场景。目前，D-Robotics 已推出 4 款双目摄像头模组。

<div className="stereo-lineup-table-wrap" style={{ overflowX: 'auto' }}>

<table style={{ tableLayout: 'fixed', width: '100%', minWidth: '960px' }}>
  <thead>
    <tr>
      <th style={{ width: '16%', whiteSpace: 'normal' }}>产品名称</th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/stereo_camera_gs130w/product_overview?p=GS130W">RDK™ Stereo Camera GS130W</a></th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/stereo_camera_gs130wi/product_overview?p=GS130WI">RDK™ Stereo Camera GS130WI</a></th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/stereo_camera_a1/product_overview?p=A1">RDK™ Stereo A1</a></th>
      <th style={{ width: '21%', whiteSpace: 'normal' }}><a href="/accessories_stereo_camera_doc/stereo_camera_a1p/product_overview?p=A1P">RDK™ Stereo A1P</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>产品图片</td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_gs130w.png" alt="RDK Stereo Camera GS130W" /></td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_gs130wi.png" alt="RDK Stereo Camera GS130WI" /></td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_a1.png" alt="RDK Stereo A1" /></td>
      <td><img className="stereo-lineup-image" src="https://rdk-doc.oss-cn-beijing.aliyuncs.com/doc/img/accessories/overview/zh/lineup_a1p.png" alt="RDK Stereo A1P" /></td>
    </tr>
    <tr>
      <td>适用平台</td>
      <td colSpan="4">RDK X5、RDK S100/S100P、RDK S600</td>
    </tr>
    <tr>
      <td>双目分辨率</td>
      <td>横屏 1280×1088</td>
      <td>竖屏 1088×1280</td>
      <td>竖屏 1088×1280</td>
      <td>竖屏 1088×1280</td>
    </tr>
    <tr>
      <td>双目基线长度</td>
      <td>80 mm</td>
      <td>70 mm</td>
      <td>70 mm</td>
      <td>70 mm</td>
    </tr>
    <tr>
      <td>IMU 型号</td>
      <td>无</td>
      <td>ICM42688-P</td>
      <td>无</td>
      <td>ICM42607-C</td>
    </tr>
  </tbody>
</table>

</div>

## 文档结构

每款双目相机文档采用统一章节结构，便于按使用阶段查阅：

| 章节 | 说明 |
| --- | --- |
| 产品简介 | 产品特性、适用板卡、硬件接口与关键参数 |
| 安装连接 | 物品清单、接线/安装步骤与注意事项 |
| 快速开始 | SDK 或系统工具获取、示例运行与验证方法 |
| 硬件说明 | 结构尺寸、接口定义、拓扑与引脚说明 |
| 软件说明 | API 说明、驱动/SDK 使用与二次开发指引 |
| 资料下载 | 规格书、Datasheet、3D 图纸等参考资料 |
