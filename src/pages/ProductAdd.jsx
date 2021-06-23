import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import AlperenTextInput from "../utilities/customFormControls/AlperenTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <div>
      <Formik 
      initialValues = {initialValues} 
      validationSchema = {schema}
      onSubmit = {(values)=>{
          console.log(values)
      }}
      >
        <Form className="ui form">
            <AlperenTextInput name="productName" placeholder="Ürün Adı"/>
            <AlperenTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
          <Button color="green" type="submit">Ürün ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
