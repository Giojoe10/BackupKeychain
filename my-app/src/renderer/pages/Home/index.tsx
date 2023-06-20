import React from 'react';
import { Card } from 'antd';
import { SettingOutlined, SaveOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Home() {
  return (
    <div className="bg-background flex justify-center items-center h-screen">
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
            src="https://upload.wikimedia.org/wikipedia/en/c/c1/Risk_of_Rain_2.jpg"
          />
        }
      >
        <Meta
          title="Risk of Rain 2"
          description="C:\Users\Giojoe\RiskOfRain2\Saves"
        />
      </Card>
    </div>
  );
}

export default Home;
