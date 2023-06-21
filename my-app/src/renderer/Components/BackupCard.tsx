import React from 'react';
import { Card } from 'antd';
import { SettingOutlined, SaveOutlined } from '@ant-design/icons';

function BackupCard({title, path, image, index}) {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 280 }}
        actions={[
          <SettingOutlined key="setting" />,
          <SaveOutlined key="save" />,
        ]}
        cover={
          <img
            alt=""
            src={image}
          />
        }
      >
        <Meta
          title={title}
          description= {<p className=" break-words">{path}</p>}
        />
      </Card>
    </div>
  );
}

export default BackupCard;
