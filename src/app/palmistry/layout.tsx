import Wrapper from '@/components/wrapper/wrapper';
import Header from '@/components/header/header';
import Progressbar from '@/components/progress-bar/progress-bar';
import PalmistryContainer from '@/components/palmistry-container/palmistry-container';
import InputWrapper from '@/components/input-wrapper/input-wrapper';
import InputItem from '@/components/input-item/input-item';
import Button from '@/components/button/button';

export default function PalmistryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              />

              <InputItem
                label="Month"
                placeholder="MM"
                maxLength={2}
                type="text"
              />
              
              <InputItem
                label="Day"
                placeholder="DD"
                maxLength={2}
                type="text"
              />
            </InputWrapper>
          </div>
          
          <Button type="button">Next</Button>
        </PalmistryContainer>
      </main>
    </Wrapper>
  );
}
