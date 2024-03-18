import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.</h2>
        <br/>
        &nbsp;&nbsp;<p><strong>Favourite Tasks:</strong></p>
        &nbsp;&nbsp;&nbsp;&nbsp;<ul>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Respond to 50+ support requests via email every day:</strong> I thrive on this task. It&apos;s like solving a new puzzle with each email, and the joy of helping someone overcome their hurdles is immensely satisfying.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Write and maintain support articles and docs pages:</strong> I see this as painting a picture with words. It&apos;s about making complex concepts understandable, and I love the challenge it presents.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Create video tutorials:</strong> This task is like directing a movie where the star is the feature or use case I&apos;m explaining. It&apos;s creative, fun, and has a direct impact on our users.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Analyze hundreds of support tickets to spot trends:</strong> This is like being a detective, looking for patterns and clues in a sea of data. The insights drawn can drive proactive solutions, making it a rewarding task.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Work with the product team to develop a new feature based on feedback from customers:</strong> This task is exciting as it&apos;s about turning user feedback into tangible improvements in our product. It&apos;s like seeing your ideas come to life.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;</ul>
        <br/>
        &nbsp;&nbsp;<p><strong>Least Favourite Tasks:</strong></p>
        &nbsp;&nbsp;&nbsp;&nbsp;<ul>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Scheduling time-off coverage:</strong> While it&apos;s a necessary task, it&apos;s more administrative and less dynamic than the others. However, I understand its importance in ensuring seamless support coverage.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Manage a support team:</strong> This task can be challenging as it involves juggling multiple responsibilities. But it&apos;s a learning curve I&apos;m willing to climb.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Find and recruit teammates for the support team:</strong> This task can be a bit daunting as it requires finding the right balance between technical prowess and cultural fit. But it&apos;s a challenge I&apos;m up for.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Help resolve billing issues for customers:</strong> This task can be intricate and requires a deep understanding of various billing systems. But I&apos;m always ready to dive deep and learn.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;<li><strong>Run ticket review sessions to make sure tone is consistent:</strong> This task can be repetitive, but I understand its importance in maintaining a consistent voice in our support.</li>
        &nbsp;&nbsp;&nbsp;&nbsp;</ul>
        <br/>
        <h2>2. What do you want to learn or do more of at work?</h2>
        <p>At work, I&apos;m eager to dive deeper into the latest technologies and how they can enhance user support. I also aspire to hone my leadership skills and contribute to a positive team culture. For example, I would love to learn more about AI and machine learning and how they can be leveraged to improve customer support.</p>
        <br/>
        <h2>3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</h2>
        <p>In a previous role, I encountered a critical service failure. It was like being thrown into a maze with an unknown exit. But by systematically isolating the issue, delving into logs, and identifying an unusual pattern, I found my way out. The service was restored, and the absence of recurring errors was my victory flag. For instance, when a critical service was failing due to an unknown error, I was able to solve it by identifying an unusual pattern in the logs and implementing a fix.</p>
        <br/>
        <h2>4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h2>
        <p>Choosing between Edge Functions, Serverless Functions, or Edge Middleware with Vercel is like choosing the right tool for the job. Edge Functions are my go-to for customizing content at the edge level, Serverless Functions for running server-side code without server management, and Edge Middleware for adding custom logic at the edge network before reaching the application. For example, if you need to customize the content based on the user&apos;s location, Edge Functions would be the ideal choice.</p>
        <br/>
        <h2>5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?</h2>
        <p>If a customer needs help with an unfamiliar framework or technology, I&apos;d approach it like exploring a new city. I&apos;d start by gathering information, asking for details about the issue, steps taken, and expected vs. actual results. I&apos;d also request a link to the repository, if possible, to get a better lay of the land. For instance, if a customer is having trouble deploying a Next.js app, I would ask for any error messages they&apos;re seeing, the steps they&apos;ve taken so far, and a link to the repository if possible.</p>
        <br/>
        <h2>6. The customer from question 5 replies to your response with the below: “I&apos;m so frustrated. I&apos;ve been trying to make this work for hours and I just can&apos;t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” Please write a follow-up reply to the customer.</h2>
        <p>Subject: Re: Your Recent Support Request</p>
        <p>Dear [Customer&apos;s Name],</p>
        <p>I understand that you&apos;re feeling frustrated, and I&apos;m really sorry that you&apos;re experiencing this issue. I&apos;m here to help you, and together, we&apos;ll get this sorted out. While it&apos;s possible that this could be a platform issue, it could also be something else. If you could provide me with a bit more information, I&apos;ll do my best to get this resolved for you as quickly as possible.</p>
        <p>Best Regards,</p>
        <p>[Your Name]</p>
        <br/>
        <h2>7. A customer writes in to the Helpdesk asking &quot;How do I do a redirect from the /blog path to https://example.com?&quot; Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.</h2>
        <p>Subject: Re: Redirecting /blog to another URL</p>
        <p>Dear [Customer&apos;s Name],</p>
        <p>To redirect from the /blog path to https://example.com, you can add a redirect rule in your &apos;vercel.json&apos; file. It&apos;s like setting up a signpost that guides all traffic from /blog to https://example.com. For example, you can add the following code to your &apos;vercel.json&apos; file:</p>
        &nbsp;&nbsp;&nbsp;&nbsp;<code>
        {JSON.stringify({
        "redirects": [
        { "source": "/blog", "destination": "https://example.com", "permanent": true }
        ]
        }, null, 2)}
        &nbsp;&nbsp;&nbsp;&nbsp;</code>
        <p>Once you&apos;ve added this code, any traffic to /blog will be automatically redirected to https://example.com.</p>
        <p>Best Regards,</p>
        <p>[Your Name]</p>
        <br/>
        <h2>8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.</h2>
        <p>Subject: Preventing Your Site from Being Indexed by Search Engines</p>
        <p>Dear [Customer&apos;s Name],</p>
        <p>If you want your site to be invisible to search engines, you can add a &apos;robots.txt&apos; file to your project. It&apos;s like putting up a &apos;Do Not Disturb&apos; sign for web crawlers. For example, you can create a &apos;robots.txt&apos; file with the following content:</p>
        &nbsp;&nbsp;&nbsp;&nbsp;<pre>
        User-agent: *
        Disallow: /
        &nbsp;&nbsp;&nbsp;&nbsp;</pre>
        <p>This will tell web crawlers not to index any pages on your site.</p>
        <p>Best Regards,</p>
        <p>[Your Name]</p>
        <br/>
        <h2>9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?</h2>
        <p>One common problem customers might face is deployment issues. It&apos;s like hitting a roadblock on a journey. To help them, we could provide detailed error messages, comprehensive documentation, and responsive support. In the long run, we could improve our platform&apos;s stability and ease of use based on their feedback, effectively paving a smoother road for them.</p>
        <br/>
        <h2>10. How could we improve or alter this familiarisation exercise?</h2>
        <p>This exercise could be improved by adding more real-world scenarios and providing feedback throughout. It&apos;s like turning a monologue into a dialogue, making the exercise more engaging and informative.</p>
      </div>
    </main>
  );
}
