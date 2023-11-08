import { StyledOverlay, StyledModal } from './ModalNewTask.styled';
import { Formik, Form, Field } from 'formik';
import { SelectLevel } from 'components/ReactSelect/SelectLevel';

const levelDefault = 'normal';

export const ModalNewTask = () => {
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <StyledOverlay>
      <StyledModal>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            selectLevel: levelDefault,
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="selectLevel">
                {({ field }) => (
                  <SelectLevel
                    {...field}
                    currentValue={values.selectLevel}
                    dataFunc={option =>
                      setFieldValue('selectLevel', option.value)
                    }
                  />
                )}
              </Field>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </StyledModal>
    </StyledOverlay>
  );
};
