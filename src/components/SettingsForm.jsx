import React from 'react';
import { toNumber } from 'lodash';
import { Control, Form } from 'react-redux-form';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Slider from 'react-toolbox/lib/slider';

import styles from '../styles/SettingsForm.css';


// Using HTML5 validation for the sake of expedience.
// In a real app this isn't usable due to browser bugs and inconsistencies.

const SettingsForm = (props) => {
    return (
      <Form
        className={styles.form}
        model="form.game"
        onSubmit={data => props.formSubmission(data)}
      >
        <section>
          <div className={styles.starts}>
            <fieldset>
              <legend>Board Size</legend>
              <div className={styles.formGroup}>
                <Control
                  className={styles.control}
                  model='.board.width'
                  component={Input}
                  type='number'
                  label='width'
                  min={4}
                  max={20}
                  parser={toNumber}
                />
                <Control
                  className={styles.control}
                  model='.board.height'
                  component={Input}
                  type='number'
                  label='height'
                  min={4}
                  max={20}
                  parser={toNumber}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Hoover Start</legend>
                <div className={styles.formGroup}>
                <Control
                  className={styles.control}
                  model='.hoover.x'
                  component={Input}
                  type='number'
                  label='x'
                  min={1}
                  max={props.board.width}
                  parser={toNumber}
                />
                <Control
                  className={styles.control}
                  model='.hoover.y'
                  component={Input}
                  type='number'
                  label='y'
                  min={1}
                  max={props.board.height}
                  parser={toNumber}
                />
              </div>
            </fieldset>
          </div>
          <fieldset className={styles.dirtSpots}>
            <legend className={styles.dirtSpotsTitle}>Dirt spots</legend>
            <div className={styles.sliderContainer}>
              <Control
                model='.dirtNo'
                component={Slider}
                label='total'
                pinned
                snaps
                min={1}
                max={5}
                step={1}
                onChange={(e) => props.changeSpots(e)}
                parser={toNumber}
              />

            </div>
          </fieldset>
          {props.dirt.map((dirt, i) =>
            <fieldset key={i}>
                <legend>Dirt spot {i+1} position</legend>
                <div className={styles.formGroup}>
                  <Control
                    className={styles.control}
                    model={`.dirt[${i}].x`}
                    component={Input}
                    type='number'
                    label='x'
                    min={0}
                    max={props.board.width}
                    parser={toNumber}
                  />
                  <Control
                    className={styles.control}
                    model={`.dirt[${i}].y`}
                    component={Input}
                    type='number'
                    label='y'
                    min={0}
                    max={props.board.height}
                    parser={toNumber}
                  />
                </div>
            </fieldset>
          )}
        </section>
        <div className={styles.submitBlock}>
          <Button type="submit" accent raised>Go</Button>
        </div>
      </Form>
    )
  }

export default SettingsForm;
