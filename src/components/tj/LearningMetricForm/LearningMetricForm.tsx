import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { Button } from '@app/components/common/buttons/Button/Button';
import { RadioButton, RadioGroup } from '@app/components/common/Radio/Radio';
import { notificationController } from '@app/controllers/notificationController';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export const LearningMetricForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  return (
    <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      name="validateForm"
      initialValues={{
        'input-number': 10,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      footer={
        <BaseButtonsForm.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {t('common.submit')}
          </Button>
        </BaseButtonsForm.Item>
      }
      onFinish={onFinish}
    >
      <BaseButtonsForm.Item
        name="select"
        label={t('Learning Purpose')}
        hasFeedback
        rules={[{ required: true, message: t('You Must Choose Learning Purpose!') }]}
      >
        {/* <Select placeholder={t('forms.validationFormLabels.selectCountry')}> */}
        <Select placeholder={t('Please select a learning purpose')}>
          <Option value="lane">{t('Lane Detection')}</Option>
          <Option value="object">{t('Object Detection')}</Option>
        </Select>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item label={t('Number of Client')}>
        <label>
          <BaseButtonsForm.Item name="client-number" rules={[{ required: true, message: t('Typing Client Number') }]} noStyle>
            <InputNumber min={1} max={100} />
          </BaseButtonsForm.Item>
        </label>
        <span> {t(' Clients, 1 to 100')}</span>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item label={t('Server/Client Epoch')}>      
        <span> {t(' Server Epoch ')}</span>
        <label>
          <BaseButtonsForm.Item name="server-epoch-number" rules={[{ required: true, message: t('Typing server epoch Number') }]} noStyle>
            <InputNumber min={1} max={100} />
          </BaseButtonsForm.Item>
        </label>
        
        <span> {t(' Clients Epoch ')}</span>
        <label>
          <BaseButtonsForm.Item name="client-epoch-number" rules={[{ required: true, message: t('Typing client Epoch Number') }]} noStyle>
            <InputNumber min={1} max={100} />
          </BaseButtonsForm.Item>
        </label>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="loss-button"
        // label={t('forms.validationFormLabels.radioButton')}
        label={t('Loss Function')}
        rules={[{ required: true, message: t('Choose Metric') }]}
      >
        <RadioGroup>
          <RadioButton value="mae">{t('MAE')}</RadioButton>
          <RadioButton value="mse">{t('MSE')}</RadioButton>
          <RadioButton value="rmse">{t('RMSE')}</RadioButton>
          <RadioButton value="binary">{t('Binary-CrossEntry')}</RadioButton>
        </RadioGroup>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="opt-button"
        // label={t('forms.validationFormLabels.radioButton')}
        label={t('Optimaizer')}
        rules={[{ required: true, message: t('Choose loss Function') }]}
      >
        <RadioGroup>
          <RadioButton value="binary">{t('SGD')}</RadioButton>
          <RadioButton value="mse">{t('Adam')}</RadioButton>
          <RadioButton value="rmse">{t('Adagrad')}</RadioButton>
        </RadioGroup>
      </BaseButtonsForm.Item>
    </BaseButtonsForm>
  );
};
