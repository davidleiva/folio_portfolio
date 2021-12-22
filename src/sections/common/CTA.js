import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import GlobalContext from '../../context/GlobalContext'
import { Section, Box, Title, Text, ButtonIcon } from '../../components/Core'
import Availability from '../../components/Availability'

const CTA = () => {
    const gContext = useContext(GlobalContext)
    return (
        <>
            <Section>
                <Container>
                    <Row className="text-center justify-content-center">
                        <Col lg="10" xl="7">
                            <Availability />
                            <div className="text-center my-5">
                                <Title>
                                    Are you looking for a profile like mine?
                                </Title>
                            </div>
                            <div className="text-center">
                                <ButtonIcon
                                    variant="primary"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        gContext.toggleContact()
                                    }}
                                >
                                    Let's Talk Now
                                </ButtonIcon>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </>
    )
}

export default CTA
