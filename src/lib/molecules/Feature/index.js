import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

import {
  Icon,
  Link,
  Paragraph,
  Heading,
  Badge,
  PreformattedText
} from '../../index'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${ifProp('soon', 0.4, 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`

const Feature = ({
  icon, title, link, code, children, ...props
}) => {
  return (
    <Wrapper {...props}>
      {icon && <Icon icon={icon} width={64} />}
      <Text>
        <Heading level={2}>
          {link ? <Link href={link}>{title}</Link> : title}
        </Heading>
        <Paragraph>{children}</Paragraph>
        {code && <PreformattedText block>{code}</PreformattedText>}
      </Text>
      {props.soon && <Badge palette="grayscale">soon</Badge>}
    </Wrapper>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any,
  code: PropTypes.node,
}

export default Feature
