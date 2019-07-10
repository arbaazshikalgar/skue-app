import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Field } from 'react-final-form'
import Wizard from './Wizard'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  // window.alert(JSON.stringify(values, 0, 2))
  window.alert("Request Sent");
  //api
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const App = () => (
  <Styles>
    <h1>🏁 SKUE STEPPER Component</h1>
    <h2>Wizard Form</h2>

    <Wizard
      initialValues={{ buyer: true, stooge: 'larry' }}
      onSubmit={onSubmit}
    >
    
      <Wizard.Page>
      <h2>What Would You Like To Insights On ?</h2>
      <div>
               <label>
              <Field
                name="store"
                component="input"
                type="radio"
                value="Pricing"
              />{' '}
             Store Fit
            </label>
          </div>
        <div>
        <label>
              <Field
                name="store"
                component="input"
                type="radio"
                value="Pricing"
              />{' '}
            Readinees
            </label>
          </div>
          <div>
          <label>
              <Field
                name="packaging"
                component="input"
                type="radio"
                value="Packaging"
              />{' '}
             Packaging
            </label>
            </div>
          <div>
          <label>
              <Field
                name="packaging"
                component="input"
                type="radio"
                value="Pricing"
              />{' '}
             Pricing
            </label>
            </div>
      </Wizard.Page>

      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.requestBox) {
            errors.requestBox = 'Required'
          }
        
          return errors
        }}
      >
      <h2>Add a Few Detalis for your request with Buyers</h2>
        <div>
         
          <Field
            name="requestBox"
            component="textarea"
            type="text"
            placeholder="text here"
          />
          <Error name="requestBox" />
        </div>

      
    
      </Wizard.Page>

      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.linkBox) {
            errors.linkBox = 'Required'
          } 
          return errors
        }}
      >

         <h2>Add a link for your collection</h2>
        <div>
          <Field
            name="linkBox"
            component="input"
            type="text"
            placeholder="type here"
          />
          <Error name="linkBox" />
        </div>
    

        <div>


          {/* <label>Employed?</label>
          <Field name="employed" component="input" type="checkbox" /> */}

        </div>
      
      </Wizard.Page>

      <Wizard.Page
       
      >
       <h2>Chooes an item from your collections</h2>
        <div>
          <label>liting</label>
          <div>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="larry"
              />{' '}
              Larry
            </label>
            <label>
              <Field name="stooge" component="input" type="radio" value="moe" />{' '}
              Moe
            </label>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="curly"
              />{' '}
              Curly
            </label>
          </div>
        </div>
    
      </Wizard.Page>
      <Wizard.Page
>
       <h2>Review Your Request</h2>
        <div>
          <div>
            <label>
              Images
              <img src="smiley.gif" alt="Product Image" height="42" width="42"></img>
            </label>

            <label>
              Messages
              <div>
              <Field
            name="requestBox"
            component="textarea"
            type="text"
            placeholder="text here"
          />
          <Error name="requestBox" />
        </div>
            </label>

            <label>
            URL
            <div>
          <Field
            name="linkBox"
            component="input"
            type="text"
            placeholder="type here"
          />
          <Error name="linkBox" />
        </div>
            </label>
          </div>
        </div>
      
      </Wizard.Page>
    </Wizard>
  </Styles>
)

render(<App />, document.getElementById("root"));

