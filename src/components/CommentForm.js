import Field from "./Field";
import Textarea from "./Textarea";
import {useForm, set} from 'react-cool-form'
import * as yup from 'yup'
import { connect } from "react-redux";
import { addComment, initState } from "../store/actionCreator";

const Comment = ({bookId, addComment}) => {

    const validateWithYup = (schema) => async (values) => {
        let errors = {};   
        try {
          await schema.validate(values , { abortEarly: false });
        } catch (yupError) {
          yupError.inner.forEach(({ path, message }) => set(errors, path, message));
        }
      
        return errors;
      };

      const yupSchema = yup.object().shape({
        name: yup.string().required().min(3),
        comment: yup.string().required().min(30),
      });


    const { form, use } = useForm({
        defaultValues: { name: "", comment: "", id: bookId},
        validate: validateWithYup(yupSchema),
        onSubmit: (values, { reset }) => {
            addComment(bookId, values)
            console.log('values: ', values)
            reset()
        }
      });

    const errors = use("errors", { errorWithTouched: true }); // Default is "false"


    return (
        <form className="row g-3" ref={form}>
        <div className="col-12">
            <Field label="Name"
                id="name"
                name="name"
                className="form-control"
                placeholder="type your name"
                error={errors.name}
            ></Field>
        </div>
        <div className="col-12">
            <Textarea label="Comment"
                id="comment"
                name="comment"
                className="form-control"
                placeholder="write your comment"
                error={errors.comment}
            ></Textarea>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Add comment</button>
        </div>
    </form>
    )
}

function mapStateToProps({booksReducer}) {
    return {
        books: booksReducer.allBooks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initState: () => dispatch(initState()),
        addComment: (id, comment) => dispatch(addComment(id, comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);