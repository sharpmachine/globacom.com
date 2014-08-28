---
layout: product
title:  ProShield Single-Line
permalink: /proshield-single-line/

intro: We believe in building safe, valuable phone connections around the world.
description: Phone line/SIP account services for your business, with 2 levels of security to choose from.
best_for: Best for consumer companies and resellers with a single phone line.

features:
  - Calling with Phone or Computer / CTI
  - Online Voicemailbox with E-mail Support
  - Pre or Post paid
  - Call rerouting
  - Parallel Signaling and Follow-me
  - Fax as PDF
  - Online Administration
  - Compatible with all SIP Phones and nearly all PBX Systems

security_heading: "2 Levels of Security to Choose from:"
security:
# Levels of choice: Basic, High, Ultimate
  - level: Basic
    css_class: tabs bg-blue-light
    alias: "(TLS/SIPS & SRTP)"
    description: "With ProShield Single-Line Basic, your phone line is secure with a Basic encryption from your device to our Globacom Carrier Grade Softswitch (GCGS) central platform."
    technical_details: |
      <p>ProShield Single-Line Basic supports both encrypted signaling known as SIPS which can be SSL or TLS with signed certificates. ProShield Single-Line Basic also supports encrypted audio/media known as SRTP. Typical convention is to have the unencrypted SIP control channel on UDP port 5060 (although the standards also allow for using TCP port 5060 as well), and an SSL encrypted or TLS encrypted SIP control channel known as SIPS on TCP port 5061.</p>
      <p>SRTP is ideal for protecting Voice over IP traffic because it can be used in conjunction with header compression and has no effect on IP Quality of Service. This provides significant advantages, especially for voice traffic using low-bitrate voice codecs.</p>
    infographic: "1level_of_security@2x.png"
    table: high-vs-basic

  - level: High
    css_class: tabs-inverse
    alias: "(TLS/SIPS, SRTP & VPN)"
    description: "With ProShield Single-Line High, your phone line is more secure with the same Basic encryption, plus VPN from your device to our Globacom Carrier Grade Softswitch (GCGS) central platform, providing a higher level of security."
    technical_details: |
      <p>ProShield Single-Line High combines ProShield Single Line Basic, plus voice over IP (VoIP / Voice over Internet Protocol) and virtual private network technologies to offer a method for delivering secure voice. Because VoIP transmits digitized voice as a stream of data, the VoIP (Voice over Internet Protocol) VPN solution accomplishes voice encryption quite simply, applying standard data-encryption mechanisms. With ProShield Single-Line High you have a VPN tunnel to our Datacenter in Switzerland. All calls can be tunneled both sides. Inside of the tunnel you have encrypted Voice and Signaling (TLS/SIP/SRTP).</p>
    infographic: "2levels_of_security@2x.png"
    table: high-vs-basic

---