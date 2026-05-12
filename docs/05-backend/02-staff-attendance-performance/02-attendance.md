---
title: 员工考勤
sidebar_position: 2
---

# 员工考勤

<!-- ====================== 功能说明 ====================== -->
## 功能说明

<ul className="mobile-list">
  <li>
    <strong>考勤管理：</strong>支持员工进行上下班打卡、外勤打卡及补卡申请。
  </li>
  <li>
    <strong>规则控制：</strong>可设置上下班时间、迟到早退规则、打卡范围及考勤方式。
  </li>
  <li>
    <strong>数据统计：</strong>自动统计员工迟到、早退、缺勤、工作时长及出勤天数。
  </li>
</ul>

<!-- ====================== 系统字段说明 ====================== -->
### 考勤类别说明

<div className="step-block">
  <ul className="key-list compact-list">
    <li>
      <strong>班次基准：</strong>和员工排班关联，以判断员工是否正常上下班、迟到及早退
    </li>
    <li>
      <strong>打卡计时：</strong>员工可在当天多次打卡上班，打卡下班，最后根据上班卡和下班卡之间的时长合并来计算当天工作时间。
    </li>
    </ul>
</div>

<!-- ====================== 操作路径 ====================== -->
<div className="doc-note">
  <strong>操作路径：</strong> 设置 → 员工管理 → 员工考勤
</div>

{/*
<!-- ====================== 操作视频 ====================== -->
## 操作视频

<div className="video-card">
  <div className="video-block responsive-video">
    <iframe
      src="https://www.youtube.com/embed/VSsU9MVqAEs"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>

  <div className="video-card-body">
    <div className="video-card-text">
      如视频无法播放，请点击下方按钮前往 YouTube 登录观看。
    </div>

    <a
      className="video-btn"
      href="https://www.youtube.com/watch?v=VSsU9MVqAEs"
      target="_blank"
      rel="noopener noreferrer"
    >
      👉 打开 YouTube 观看
    </a>
  </div>
</div>
*/}

<!-- ====================== 操作步骤 ====================== -->
## 操作步骤

<!-- ---------- 步骤 1：新增工资单模板 ---------- --> 
### 1. 新增工资单模板

<div className="step-block">
  <div className="step-desc">
    在 “MaSe” 导航栏中打开 <strong>设置 → 员工管理 → 工资单</strong>，进入工资单页面。
  </div>

  ![工资单页面](./images/02staffattendance/11backend.png)
  <div className="image-caption">图 1：进入工资单页面</div>

  <div className="step-desc">
    在 <strong>工资单</strong> 页面，点击右上角 <strong>模板设置</strong>，进入模板设置页面。
  </div>

  ![模板设置入口](./images/02staffattendance/12backend.png)
  <div className="image-caption">图 2：点击模板设置</div>

  <div className="step-desc">
    在 <strong>模板设置</strong> 页面，左侧点击 <strong>添加</strong>，输入 <strong>模板名称</strong> 后点击 <strong>保存</strong>，即可创建新模板。
  </div>

  ![新增模板](./images/02staffattendance/13backend.png)
  <div className="image-caption">图 3：新增工资单模板</div>
</div>

<!-- ---------- 步骤 2：修改工资单模板内容 ---------- -->
### 2. 修改工资单模板内容

<div className="step-block">
  <div className="step-desc">
    在 <strong>模板设置</strong> 页面，点击需要修改的工资单模板，左上角会显示当前已选择的模板名称。
  </div>

  <div className="step-desc">
    在模板中点击对应板块的 <strong>➕</strong> 按钮，可添加不同字段；设置完成后点击 <strong>保存</strong>。
  </div>

  <ul className="key-list compact-list">
    <li><strong>员工：</strong>添加本工资单需要关联的员工信息。</li>
    <li><strong>系统提供字段：</strong>添加系统中记录的员工工资相关数据，例如 <strong>工作时长</strong>、<strong>账务天数</strong>、<strong>提成</strong>、<strong>奖励</strong> 等。</li>
    <li><strong>工资增加项：</strong>添加额外奖励或补贴项目。</li>
    <li><strong>工资扣减项：</strong>添加工资扣减项目。</li>
  </ul>

  ![修改模板内容](./images/02staffattendance/14backend.png)
  <div className="image-caption">图 4：设置工资单模板内容</div>
</div>

<!-- ---------- 步骤 3：新建工资单 ---------- -->
### 3. 新建工资单

<div className="step-block">
  <div className="step-desc">
    在 <strong>工资单</strong> 页面，点击右上角 <strong>新建工资单</strong>，进入新建工资单页面。
  </div>

  ![新建工资单](./images/02staffattendance/15backend.png)
  <div className="image-caption">图 5：点击新建工资单</div>

  <div className="step-desc">
    选择 <strong>模板</strong>，输入 <strong>名称</strong>，并设置 <strong>账务日期</strong>，完成后点击 <strong>保存</strong>，即可创建新的工资单。
  </div>

  ![填写工资单信息](./images/02staffattendance/16backend.png)
  <div className="image-caption">图 6：填写工资单信息</div>

  <div className="step-desc">
    创建完成后，在工资单列表中找到对应记录，点击后方的 <strong>查看</strong>，进入工资单详情页面。
  </div>

  ![查看工资单](./images/02staffattendance/17backend.png)
  <div className="image-caption">图 7：查看工资单详情</div>

  <div className="step-desc">
    在工资单详情页面，点击右上角 <strong>编辑</strong>，进入工资单详情编辑页面。
  </div>

  ![编辑工资单](./images/02staffattendance/18backend.png)
  <div className="image-caption">图 8：编辑工资单</div>

  <div className="step-desc">
    在详情编辑页面，点击上方的 <strong>刷新</strong> 按钮，系统会自动带入相关数据；补充其他工资字段后，点击 <strong>保存</strong>。
  </div>

  ![刷新并保存工资单](./images/02staffattendance/19backend.png)
  <div className="image-caption">图 9：刷新并保存工资单</div>
</div>

<!-- ---------- 步骤 4：发布工资单 ---------- -->
### 4. 发布工资单

<div className="step-block">
  <div className="step-desc">
    在工资单页面中，点击对应工资单后的 <strong>查看</strong>，进入工资单详情页面。
  </div>

  ![工资单详情](./images/02staffattendance/17backend.png)
  <div className="image-caption">图 10：进入工资单详情页</div>

  <div className="step-desc">
    在详情页面点击右上角 <strong>发布</strong>，再点击 <strong>确定</strong>，即可完成工资单发布。
  </div>

  ![发布工资单](./images/02staffattendance/20backend.png)
  <div className="image-caption">图 11：发布工资单</div>

  <div className="step-desc">
    发布后，员工可在 <strong>MaSe Staff</strong> 中通过 <strong>管理 → 工资单</strong> 查看已发布的工资单。
  </div>

  ![员工端查看工资单](./images/02staffattendance/21backend.png)
  <div className="image-caption">图 12：员工端查看工资单</div>
</div>

<!-- ====================== 温馨提示 ====================== -->
## 温馨提示

<div className="doc-note">
  <strong>注意 1：</strong> 工资单的 <strong>账务日期</strong> 在创建成功后不可修改。
</div>

<div className="doc-note">
  <strong>注意 2：</strong> 已发布的工资单如需修改，需先在详情页中点击 <strong>撤回发布</strong>，再进行编辑。
</div>