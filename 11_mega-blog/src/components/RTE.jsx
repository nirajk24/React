import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue='default value'
            init={{
              initialValue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "image advlist autolink lists link image charmap preview anchor",
                "searchplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount anchor",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor |alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help",
              content_style:
                "body {font-family: Helvetica, Arial, sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}

export default RTE
