'use client';

import React from 'react';

import Wrapper from '@/components/wrapper/wrapper';
import Header from '@/components/header/header';
import Progressbar from '@/components/progress-bar/progress-bar';
import PalmistryContainer from '@/components/palmistry-container/palmistry-container';
import InputWrapper from '@/components/input-wrapper/input-wrapper';
import InputItem from '@/components/input-item/input-item';
import Button from '@/components/button/button';

enum Field {
  year = 'year',
  month = 'month',
  day = 'day',
}

export default function PalmistryLayout() {
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [fieldsWithErrors, setFieldsWithErrors] = React.useState(new Set as Set<Field>);
  const [errorIsVisible, setErrorIsVisible] = React.useState(false);

  const onChangeYear = (value: string) => {
    const yearNumber = Number(value);

    if (Number.isNaN(yearNumber) || yearNumber > new Date().getFullYear()) {
      return;
    }

    setFieldsWithErrors((prevValue) => {
      const newValue = new Set(prevValue);

      if (value !== '' && yearNumber < 1924) {
        newValue.add(Field.year);
      } else {
        newValue.delete(Field.year);
      }

      return newValue;
    });

    setYear(value);
  };

  const onChangeMonth = (value: string) => {
    const monthNumber = Number(value);

    setFieldsWithErrors((prevValue) => {
      const newValue = new Set(prevValue);

      if (value !== '' && (monthNumber === 0 || monthNumber > 12)) {
        newValue.add(Field.month);
      } else {
        newValue.delete(Field.month);
      }

      return newValue;
    });

    if (Number.isNaN(monthNumber) || monthNumber > 12) {
      return;
    }

    if (monthNumber < 10) {
      setMonth(`0${monthNumber}`);
    } else {
      setMonth(`${monthNumber}`);
    }
  };

  const onChangeDay = (value: string) => {
    const dayNumber = Number(value);
    const monthNumber = Number(month);

    setFieldsWithErrors((prevValue) => {
      const newValue = new Set(prevValue);

      if (value !== '' && dayNumber === 0) {
        newValue.add(Field.day);
      } else {
        newValue.delete(Field.day);
      }

      return newValue;
    });

    if (
      Number.isNaN(dayNumber) ||
      !monthNumber ||
      monthNumber === 2 && dayNumber > 29 ||
      [4, 6, 9, 11].includes(monthNumber) && dayNumber > 30 ||
      dayNumber > 31
    ) {
      return;
    }

    if (dayNumber < 10) {
      setDay(`0${dayNumber}`);
    } else {
      setDay(`${dayNumber}`);
    }
  };

  const onFocus = (field: Field) => {
    if (fieldsWithErrors.has(field) && fieldsWithErrors.size === 1) {
      setErrorIsVisible(false);
    }
  };

  const onBlur = (field: Field) => {
    if (fieldsWithErrors.has(field)) {
      setErrorIsVisible(true);
    }
  };

  const formIsValid = Boolean(year && month && day && !fieldsWithErrors.size);

  const onSend = () => {
    if (!formIsValid) {
      return;
    }

    localStorage.setItem('birthDate', `${year}-${month}-${day}`);
  };

  return (
    <Wrapper>
      <Header/>

      <Progressbar progressPercentage={22.222}/>

      <main className="wrapper__main">
        <PalmistryContainer>
          <h3 className="palmistry-container__header">What’s your date of birth?</h3>

          <p className="palmistry-container__description">
            Your birth date reveals your core personality traits, needs and desires.
          </p>

          <div className="palmistry-container__form-birthday">
            <InputWrapper>
              <InputItem
                label="Year"
                placeholder="YYYY"
                maxLength={4}
                type="text"
                value={year}
                onChange={onChangeYear}
                onFocus={() => onFocus(Field.year)}
                onBlur={() => onBlur(Field.year)}
              />

              <InputItem
                label="Month"
                placeholder="MM"
                type="text"
                value={month}
                onChange={onChangeMonth}
                onFocus={() => onFocus(Field.month)}
                onBlur={() => onBlur(Field.month)}
              />
              
              <InputItem
                label="Day"
                placeholder="DD"
                type="text"
                value={day}
                onChange={onChangeDay}
                onFocus={() => onFocus(Field.day)}
                onBlur={() => onBlur(Field.day)}
              />
            </InputWrapper>

            <h3
              className={[
                'palmistry-container__error-text',
                errorIsVisible ? 'palmistry-container__error-text_visible' : '',
              ].join(' ')}
            >Date not found. Please check your details and try again.</h3>
          </div>
          
          <Button
            type="button"
            disabled={!formIsValid}
            onClick={onSend}
          >
            Next
          </Button>
        </PalmistryContainer>
      </main>
    </Wrapper>
  );
}
